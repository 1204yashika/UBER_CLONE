import {createSlice} from '@reduxjs/toolkit'

const captainSlice = createSlice({
	name: 'captain',
	initialState: null,
	reducers: {
		setCaptain: (state, action)=>{
			console.log("action.payload", action.payload);
			return action.payload;
		},
		removeCaptain: (state, action)=>{
			return null;
		}
	}
})

export const {setCaptain, removeCaptain} = captainSlice.actions;

export default captainSlice.reducer;