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
import FeatherIcon from 'feather-icons-react';
  

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
    job_salary_currency,
    job_salary_period,
} = job;

const formattedDate = new Date(job_posted_at_datetime_utc).toLocaleDateString();
function getPostedAt(){
    const currentDate = new Date().toLocaleDateString();
    if(currentDate==formattedDate){
        return <span className='text-green-600'>Posted Today</span>
    } else {
        return `posted: ${formattedDate}`
    }
}

function handleClick(){
    dispatch(setActiveJob(job))
}
  return (
    <div className='mb-4' onClick={handleClick}>
        <Card>
            <CardHeader>
                <CardTitle>{job_title}</CardTitle>
                <CardDescription>
                    {employer_name}
                </CardDescription>
            </CardHeader>
            <CardFooter className='flex gap-2 items-center justify-between'>
                <div className='flex gap-4 '>
                    <div className='flex items-center gap-1'><FeatherIcon className='text-blue-500' icon='map-pin' size={22} />{job_city}</div>
                    {job_is_remote && <div className='flex items-center gap-1'><FeatherIcon className='text-blue-500' icon='briefcase' size={22} />Remote</div>}
                </div>
                <div className='text-sm text-gray-500'>{getPostedAt()}</div>
            </CardFooter>
        </Card>
    </div>

  )
}

export default SearchedJobItem