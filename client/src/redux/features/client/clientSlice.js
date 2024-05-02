import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { combineReducers } from 'redux';

export const registerUser = createAsyncThunk('client/registerUser',
    async(userData, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:4000/signup', userData);
            if (response.status === 400) {
                alert(response.data.message); // Display an alert message
                return thunkAPI.rejectWithValue({ message: response.data.message });
            }
            alert(response.data.message); // Display an alert message
            return response.data;
        } catch (error) {
            console.log("rrrrr1111"+ error);
            console.error('An error occurred:', error);
            alert(error.response.data.message); // Display the server message
            return thunkAPI.rejectWithValue({ message: error.message });
        }
    }
);


const clientSlice = createSlice({
    name:'Client',
    initialState: { user: null, status: null, error: null, message: null },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.status = "loading";
            state.error = null;
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.user = action.payload;
            state.error = null;
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
            state.message = action.payload.message;
        })
    }
});
//============================================================================================================================================

const clientLogout = createSlice({
  name: 'client',
  initialState: { user: null },
  reducers: {
    logoutUser: (state) => {
      state.user = null;
    },
  },
});

//--------------------------------------------------------------------------------------------------------------------------------

export const loginUser = createAsyncThunk('client/loginUser', async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:4000/login', userData);
      localStorage.setItem('token', response.data.token); // Store the JWT in the local storage
      return response.data.user;
    } catch (err) {
      if (!err.response) {
        throw err
      }
  
      // We got validation errors, let's return those so we can reference in our component
      return rejectWithValue(err.response.data)
    }
  });
const clientLogin = createSlice({
    name: 'client',
    initialState: { user: null, status: 'idle', error: null },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(loginUser.pending, (state) => {
        console.log("111111");
        state.status = 'loading';
      });
      builder.addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log("222");
        state.user = action.payload;
      });
      builder.addCase(loginUser.rejected, (state, action) => {
        console.log("333333");
        state.status = 'failed';
        state.error = action.error.message;
      });
    },
  });
  

const rootReducer = combineReducers({
    register: clientSlice.reducer,
    login: clientLogin.reducer,
    logout: clientLogout.reducer,
});


export default rootReducer;

