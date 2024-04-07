const Job = require('../models/jobModel');

// Controller function to get all jobs
exports.getAllJobs = async (req, res) => {
  try {
    // Fetch all jobs from the database
    const jobs = await Job.find();
    res.json({ success: true, data: jobs });
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

exports.createJob = async (req, res) => {
    try {
        const { title, company, location, description, salary } = req.body;
        const userId = req.user._id;
        const newJob = await Job.create({ title, company, location, description, salary, user: userId });
        res.status(201).json({ success: true, data: newJob });
    } catch (error) {
        console.error('Error creating job:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

exports.getJobsByUser = async (req, res) => {
    try {
        const userId = req.user._id;
        const jobs = await Job.find({ user: userId });
        res.json({ success: true, data: jobs });
    } catch (error) {
        console.error('Error fetching jobs by user:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};
