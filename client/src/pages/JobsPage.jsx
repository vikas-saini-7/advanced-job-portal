import { getAllJobs } from '@/redux/actions/jobsActions';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const JobsPage = () => {
  const dispatch = useDispatch();
  const allJobs = useSelector(state => state.jobs.allJobs);
  const loading = useSelector(state => state.jobs.loading);

  useEffect(()=> {
    dispatch(getAllJobs())
  }, [])
  
  return (
    <div>
      {/* <h1>Jobs</h1> */}
      {/* {loading && <p>Loading...</p>} */}
      {allJobs.map((job) => (
        <p>{job.title}</p>
      ))}
    </div>
  )
}

export default JobsPage