import React from 'react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='container flex items-center justify-between h-[60px]'>
        <Link to='/'>
          <h1 className='font-bold text-blue-600 text-xl'>Job Portal</h1>
        </Link>
        <nav>
            <ul className='flex items-center gap-4'>
                <li>
                  <Link to='/jobs'>Jobs</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
                <li>
                  <Link to='/contact'>Contact</Link>
                </li>
                <li>
                  <Link to='login'>
                    <Button variant="outline">Login</Button>
                  </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header