import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// CREATESLICE: A function that accepts an initial state, an object of reducer functions, and a "slice name",
// and automatically generates action creators and action types that correspond to the reducers and state.

const initialState = {
    goals: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    messge: '',
}

export const goalSlice = createSlice({
    name: 'goal',
    initialState, 
    reducers: {
        reset: (state) => initialState
    }
})

// reset has to be exported from const actions
export const {reset} = goalSlice.actions
export default goalSlice.reducer