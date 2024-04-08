import React, { useState } from 'react'
import {fetchJobs} from '../redux/actions/searchJobsActions'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Hero = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [jobName, setJobName] = useState('')
    const [location, setLocation] = useState('')

    function handleSearchClick(){
        dispatch(fetchJobs({ jobName, location }))
        navigate('/jobs')
    }
  return (
    <div className='flex flex-col md:flex-row gap-8 md:gap-2 items-center justify-between py-[5%]'>
        <div className='flex flex-col w-1/2'>
            <h1 className='text-4xl mb-4'>Find Jobs, quickly</h1>
            <p className='mb-[8%] text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, voluptate esse minima itaque nam quod libero eum saepe?</p>
            <div className='flex flex-col flex-wrap md:flex-row'>
                <input className='border rounded-full mb-2 md:rounded-e-none md:border-r-0 px-4 py-1' type="text" placeholder='Search' onChange={(e) => setJobName(e.target.value)} />
                <input className='border rounded-full mb-2 md:rounded-s-none  px-4 py-1' type="text" placeholder='Location' onChange={(e) => setLocation(e.target.value)}  />
                <Button onClick={handleSearchClick}>Search</Button>
            </div>
        </div>
        <div className='w-1/2'>
            <img src="./hero.svg" alt="" />
        </div>
    </div>
  )
}

export default Hero