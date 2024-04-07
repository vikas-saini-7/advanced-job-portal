import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import HomePage from '@/pages/HomePage';
import JobsPage from '@/pages/JobsPage';
import NotFound from '@/pages/NotFound';
import React from 'react'
import { Routes, Route } from 'react-router-dom';

const MainRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  )
}

export default MainRouter