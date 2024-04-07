import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = "http://localhost:5000";

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials, { rejectWithValue }) => {
      try {
        const response = await axios.post(`${BASE_URL}/api/login`, credentials);
        const { token } = response.data; 
        localStorage.setItem('token', token); 
        return response.data;
      } catch (error) {
        console.log(error)
        return rejectWithValue(error.response.data);
      }
    }
);