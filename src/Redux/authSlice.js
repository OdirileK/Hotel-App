import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerUser = createAsyncThunk('users/createUsers',async (options) => {
  try {
    const response = await axios.post('http://localhost:3000/api/auth/register', options);
    
    return response.data;
  } catch (error) {
    // localStorage.removeItem('accessToken'); 
    throw error.response.data.message || 'Registration failed';
  }
}
);

export const postUsers = createAsyncThunk('booking/postBookingOptions',async (options) => {
  try {
    const response = await axios.post(`http://localhost:3000/api/auth/login`, options);
    localStorage.setItem('accessToken', response.data.token);
    localStorage.setItem('userDetails', response.data.details._id); 

    console.log('auth slice :', response.data.details)
    return response.data
  } catch (error) {
    localStorage.removeItem('accessToken'); 
    throw error;
  }
}
);


const authSlice = createSlice({
  name: 'auth',
  initialState: {
 
    accessToken: null,
    userDetails: null, // Add this line for storing user details

    registrationLoading: false,
    registrationError: null,
    registrationSuccess: null,
  },
  reducers: {
    loginStart: (state) => {
      state.user = null;
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
      // state.accessToken = localStorage.getItem('accessToken'); 
      state.accessToken = action.payload.accessToken;
    },
    loginFailure: (state, action) => {
      state.user = null;
      state.loading = false;
      state.error = action.payload;
      state.accessToken = null;
    },
    logout: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
    setDetails: (state, action) => {
      state.userDetails = action.payload;
     },

    setAccessToken: (state, action) => {
     state.accessToken = action.payload;
    },
    clearAccessToken: (state) => {
      state.user = null;
  state.loading = false;
  state.error = null;
  localStorage.removeItem('accessToken'); 
  localStorage.removeItem('userDetails'); 
  console.log('token cleared')
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.registrationLoading = true;
        state.registrationError = null;
        state.registrationSuccess = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.registrationLoading = false;
        state.registrationSuccess = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.registrationLoading = false;
        state.registrationError = action.error.message || 'Registration failed';
      })
      .addCase(postUsers.fulfilled, (state, action) => {
        console.log('add case',action.payload.details); // Check the payload structure in the console

        state.accessToken = action.payload.accessToken;
        state.userDetails = action.payload.details; // Assuming the payload contains details

      })
  },
});

export const { setDetails,clearAccessToken ,setAccessToken,loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;