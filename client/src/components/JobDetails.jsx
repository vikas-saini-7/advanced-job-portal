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

  // Split the job description into sections
  const sections = activeJob?.jobDescription?.split('\n\n');

  return (
    <Card>
        <CardHeader>
            <CardTitle>{activeJob?.job_title}</CardTitle>
            <span>{activeJob?.employer_name}</span>
            <span>{activeJob?.job_city}, {activeJob?.job_state}, {activeJob?.job_country}</span>
            
            <CardDescription>
            {sections?.map((section, index) => (
              <div key={index}>
                {/* Split each section into lines and render them */}
                {section?.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            ))}
              </CardDescription>
        </CardHeader>
        <CardContent>
            <p>Card Content</p>
        </CardContent>
        <CardFooter>
            <div className='flex'>
              <p>Apply</p>
              <div className='flex flex-wrap'>
                {activeJob?.apply_options?.map((item)=>(
                  <a target='_blank' href={item.apply_link} className='bg-black p-2 text-white m-2'>{item.publisher}</a>
                ))}
              </div>
            </div>
        </CardFooter>
    </Card>
  )
}

export default JobDetails