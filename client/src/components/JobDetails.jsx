import React, { useEffect } from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Badge } from './ui/badge'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveJob } from '@/redux/reducers/searchJobsSlice'

const JobDetails = ({job}) => { 
  const activeJob = useSelector(state => state.searchJobs.activeJob)

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setActiveJob(job))
    }, [job])

  return (
    <Card>
        <CardHeader>
            <CardTitle>{activeJob?.job_title}</CardTitle>
            <span>{activeJob?.employer_name}</span>
            <span>{activeJob?.job_city}, {activeJob?.job_state}, {activeJob?.job_country}</span>
            
            <CardDescription>{activeJob?.job_description}</CardDescription>
        </CardHeader>
        <CardContent>
            <p>Card Content</p>
        </CardContent>
        <CardFooter>
            <p>Card Footer</p>
        </CardFooter>
    </Card>
  )
}

export default JobDetails