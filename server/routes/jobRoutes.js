const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
const authMiddleware = require('../middleware/authMiddleware');

// general 
router.get('/jobs', jobController.getAllJobs);//working

// check auth 
router.post('/jobs', authMiddleware, jobController.createJob);//working
router.get('/jobs/user', authMiddleware, jobController.getJobsByUser); //working

module.exports = router;
