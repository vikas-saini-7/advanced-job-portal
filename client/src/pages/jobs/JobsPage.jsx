import { getAllJobs } from '@/redux/actions/jobsActions';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const JobsPage = () => {
  const dispatch = useDispatch();
  const allJobs = useSelector(state => state.jobs.allJobs)

  useEffect(()=> {
    dispatch(getAllJobs())
  }, [])
  
  return (
    <div>
      jobs
    </div>
  )
}

export default JobsPage