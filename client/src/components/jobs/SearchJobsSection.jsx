import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SearchedJobItem from './SearchedJobItem'
import JobDetails from './JobDetails'
import { setActiveJob, setQueryData } from '@/redux/reducers/searchJobsSlice'
import { fetchJobs } from '@/redux/actions/searchJobsActions'

const SearchJobsSection = () => {
    const jobs = useSelector((state) => state.searchJobs.results.data)
    const loading = useSelector((state) => state.searchJobs.loading)
    const q_job = useSelector((state) => state.searchJobs.query.q_job)
    const q_location = useSelector((state) => state.searchJobs.query.q_location)
    const dispatch = useDispatch();

    // useEffect(()=>{
    //     if(!q_job && !q_location ){
    //         console.log("query running")
    //     dispatch(fetchJobs({jobName: "software developer", location: "india"}))
    //     dispatch(setQueryData({q_job:"software developer", q_location: "india"}))
    //     }
    // },[])

  return (
    <div>
        {/* <h1>SearchJobsSection</h1> */}
        {loading && <p className='text-center pt-[8%]'>Loading...</p>}
        {!loading && jobs &&
        <div className='flex gap-4'>
            <div className='w-1/3 max-h-[70vh] overflow-auto pr-2'>
            {jobs?.map((job) => (
                <SearchedJobItem
                    job={job}
                />
            ))}
            </div>
            <div className='w-2/3 max-h-[70vh] overflow-auto'>
                <JobDetails
                    job={jobs[0]}
                />
            </div>
        </div>
        }
    </div>
  )
}

export default SearchJobsSection