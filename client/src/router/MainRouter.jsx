import AboutPage from '@/pages/AboutPage';
import PostJobPage from '@/pages/PostJobPage';
import HomePage from '@/pages/HomePage';
import JobsPage from '@/pages/JobsPage';
import NotFound from '@/pages/NotFound';
import LoginPage from '@/pages/auth/LoginPage';
import SignupPage from '@/pages/auth/SignupPage';
import React from 'react'
import { Routes, Route } from 'react-router-dom';

const MainRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/post-job" element={<PostJobPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
  )
}

export default MainRouter