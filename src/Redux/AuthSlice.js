import {createSlice} from "@reduxjs/toolkit";

const initialState ={
 isConnected : true
}

export const AuthSlice = createSlice({
 name :"auth",
 initialState ,
 reducers: {
    logIn :(state, payload)=>{
        state.isConnected= !state.isConnected;
    },
    logOut: (state, payload)=>{
        state.isConnected= !state.isConnected;
    }
 }
})
export const {logIn, logOut} = AuthSlice.actions;
export default AuthSlice.reducer;