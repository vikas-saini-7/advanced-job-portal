import { createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch search results
export const searchJobs = createAsyncThunk(
    'search/searchJobs',
    async () => {
        const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/search',
        params: {
            query: 'Python developer in Texas, USA',
            page: '1',
            num_pages: '1'
        },
        headers: {
            'X-RapidAPI-Key': '532b0802c2mshc3f49408396792fp1f9c19jsn12cc247443d6',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
        };
        
        try {
        const response = await axios.request(options);
        return response.data;
        } catch (error) {
        throw error;
        }
    }
);