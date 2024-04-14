import React, { useState } from 'react'
import {fetchJobs} from '../redux/actions/searchJobsActions'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setQueryData } from '@/redux/reducers/searchJobsSlice'

const Hero = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [jobName, setJobName] = useState('')
    const [location, setLocation] = useState('')

    function handleSearchClick(){
        dispatch(fetchJobs({ jobName, location }))
        dispatch(setQueryData({q_job: jobName, q_location: location}))
        navigate('/jobs')
    }
  return (
    <div className='flex flex-col md:flex-row gap-8 md:gap-2 items-center justify-between py-[5%]'>
        <div className='flex flex-col w-full text-center'>
            <h1 className='text-4xl mb-4 font-bold'>Find Jobs, quickly</h1>
            <p className='mb-[8%] text-gray-500 max-w-[580px] mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, voluptate esse minima itaque nam quod libero eum saepe?</p>
            <div className='flex items-center justify-center flex-col flex-wrap md:flex-row'>
                <input className='border rounded-full mb-2 md:rounded-e-none md:border-r-0 px-4 py-2' type="text" placeholder='Search' onChange={(e) => setJobName(e.target.value)} />
                <input className='border rounded-full mb-2 md:rounded-s-none  px-4 py-2' type="text" placeholder='Location' onChange={(e) => setLocation(e.target.value)}  />
                <Button onClick={handleSearchClick}>Search</Button>
            </div>
        </div>
    </div>
  )
}

export default Hero