import AboutPage from '@/pages/about/AboutPage';
import PostJobPage from '@/pages/jobs/PostJobPage';
import HomePage from '@/pages/home/HomePage';
import JobsPage from '@/pages/jobs/JobsPage';
import NotFound from '@/pages/NotFound';
import LoginPage from '@/pages/auth/LoginPage';
import SignupPage from '@/pages/auth/SignupPage';
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import ExternalJobs from '@/pages/jobs/ExternalJobs';

const MainRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/post-job" element={<PostJobPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/external-jobs" element={<ExternalJobs />} />
        
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
  )
}

export default MainRouter