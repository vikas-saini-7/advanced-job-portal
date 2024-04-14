import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { signupUser } from '@/redux/actions/authActions';

const SignupForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);
    const error = useSelector(state => state.auth.error);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(email && password){
            dispatch(signupUser({ name, email, password }));
            navigate('/')
        } else {
            alert("Enter credentials")
        }
    };

  return (
    <div className='flex flex-col p-4 bg-white max-w-[400px] mx-auto mt-[10%]' >
        {error && <p>{error}</p>}
        <form className='flex flex-col'>
            <input className='border px-4 py-2 rounded mb-4' type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input className='border px-4 py-2 rounded mb-4' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className='border px-4 py-2 rounded mb-4' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={handleSubmit}>Signup</Button>
            <p className='text-center mt-8'>Already have an account? 
            <Link to='/login'> <span className='text-blue-600'>Login</span></Link>
            </p>
        </form>
    </div>
  )
}

export default SignupForm