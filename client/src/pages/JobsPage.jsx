import SearchJobsFilters from '@/components/SearchJobsFilters';
import SearchJobsSection from '@/components/SearchJobsSection';
import { getAllJobs } from '@/redux/actions/jobsActions';
import { setQueryData } from '@/redux/reducers/searchJobsSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const JobsPage = () => {
  const dispatch = useDispatch();
  const allJobs = useSelector(state => state.jobs.allJobs)

  useEffect(()=> {
    dispatch(getAllJobs())
  }, [])
  
  return (
    <div>
      {/* <h1>Jobs</h1> */}
      {/* {loading && <p>Loading...</p>} */}
      <SearchJobsFilters/>
      <SearchJobsSection/>
    </div>
  )
}

export default JobsPage