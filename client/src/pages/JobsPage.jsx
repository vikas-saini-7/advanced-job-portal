import SearchJobsSection from '@/components/SearchJobsSection';
import { getAllJobs } from '@/redux/actions/jobsActions';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const JobsPage = () => {
  const dispatch = useDispatch();

  // useEffect(()=> {
  //   dispatch(getAllJobs())
  // }, [])
  
  return (
    <div>
      {/* <h1>Jobs</h1> */}
      {/* {loading && <p>Loading...</p>} */}

      <SearchJobsSection/>

      {/* <div>
        {allJobs.map((job) => (
          <p>{job.title}</p>
        ))}
      </div> */}
    </div>
  )
}

export default JobsPage