import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import captainReducer from './captainSlice'

export const store = configureStore({
  reducer: {
	user: userReducer,
	captain: captainReducer,
  },
})

