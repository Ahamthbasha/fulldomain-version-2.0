import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchUser =createAsyncThunk('user/fetchUser',async ()=>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    return res.data
})


const userSlicer = createSlice({
    name:'user',
    initialState:{
        load:false,
        user:[],
        error:false
    },
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(fetchUser.pending,(state)=>{
            state.load =true
        })

        .addCase(fetchUser.fulfilled,(state,action)=>{
            state.load=false,
            state.user=action.payload,
            state.error =false
        })

        .addCase(fetchUser.rejected,(state,action)=>{
            state.load = false 
            state.user = []
            state.error = action.payload
        })
    }
}) 

export default userSlicer.reducer