import {createSlice} from '@reduxjs/toolkit'

const useSlice = createSlice({
	name: 'user',
	initialState: null,
	reducers: {
		setUser: (state, action)=>{
			console.log("action.payload", action.payload);
			return action.payload;
		},
		removeUser: (state, action)=>{
			return null;
		}
	}
})

export const {setUser, removeUser} = useSlice.actions;

export default useSlice.reducer;