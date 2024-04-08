import React, { useEffect } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { useDispatch } from 'react-redux';
import { setActiveJob } from '@/redux/reducers/searchJobsSlice';
  

const SearchedJobItem = ({job}) => {
    const dispatch = useDispatch()
    const {
    employer_name,
    job_title,
    job_description,
    job_apply_link,
    job_is_remote,
    job_city,
    job_state,
    job_country,
    job_posted_at_datetime_utc,
    job_required_skills,
} = job;
function handleClick(){
    dispatch(setActiveJob(job))
}
  return (
    <div className='mb-4' onClick={handleClick}>
        <Card>
            <CardHeader>
                <CardTitle>{job_title}</CardTitle>
                <CardDescription>{employer_name}</CardDescription>
            </CardHeader>
            {/* <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter> */}
        </Card>
    </div>

  )
}

export default SearchedJobItem