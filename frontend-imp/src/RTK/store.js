import { configureStore } from '@reduxjs/toolkit'
import  userReducer  from './userSlice/UserSlice'
import colorReducer from './colorSlice/ColorSlice'
export const store = configureStore({
  reducer: {
    visitors:userReducer,
    colors:colorReducer,
  },
})