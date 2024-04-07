import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const getAllJobs = createAsyncThunk(
    'jobs/getAllJobs',
    async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/jobs`);
        return response.data.data;
      } catch (error) {
        console.log(error)
        return (error.message)
      }
    }
);