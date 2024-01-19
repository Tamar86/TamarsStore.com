//importing combineReducers function because i have 2 slices in my app to manage global state
import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import userReducer from './userSlice'
//creating rootReducer
const rootReducer = combineReducers ({
    cart: cartReducer,
    user: userReducer,
})

export default rootReducer;