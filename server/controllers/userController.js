const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.signup = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.create({ email, password });
        res.json({ success: true, message: 'User signed up successfully' });
    } catch (error) {
        console.error('Error signing up:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ success: false, message: 'Authentication failed' });
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Authentication failed' });
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        res.json({ success: true, token });
    } catch (error) {
        console.error('Error logging in:', error);
        res.json({ success: false, message: 'Server error' });
    }
};

exports.validateToken = async (req, res) => {
    try {
        if(req.user){
            res.status(201).json({success: true, data:req.user})
        }
    } catch (error) {
        console.error('Error fetching jobs by user:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
}