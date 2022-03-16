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

// Create new goal
export const createGoal = createAsyncThunk('goal/create', async (goalData, thunkAPI) => {
    try {
        
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

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