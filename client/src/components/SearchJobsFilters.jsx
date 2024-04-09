import React, { useState } from 'react'
import { Button } from './ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { fetchJobs } from '@/redux/actions/searchJobsActions';
import { setQueryData } from '@/redux/reducers/searchJobsSlice';

const SearchJobsFilters = () => {
  const [jobName, setJobName] = useState()
  const [location, setLocation] = useState()
  const q_job = useSelector(state => state.searchJobs.query.q_job)
  const q_location = useSelector(state => state.searchJobs.query.q_location)
  const dispatch = useDispatch();
  function handleClick(){
    dispatch(fetchJobs({jobName, location}))
    dispatch(setQueryData({q_job: jobName, q_location: location}))
  }
  return (
    <div className='flex items-center justify-between mb-4'>
        <div>
        <div className='flex'>
            <input defaultValue={q_job} className='border rounded-full mb-2 rounded-e-none md:border-r-0 px-4 py-1' type="text" placeholder='Search' onChange={(e) => setJobName(e.target.value)} />
            <input defaultValue={q_location} className='border rounded-full mb-2 rounded-s-none  px-4 py-1' type="text" placeholder='Location' onChange={(e) => setLocation(e.target.value)}  />
            <Button onClick={handleClick}>Search</Button>
        </div>
        </div>
        {/* <div>q: {q_job} {q_location}</div> */}
    </div>
  )
}

export default SearchJobsFilters