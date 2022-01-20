import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: async (state) => {
            state.data = await fetch('https://jsonplaceholder.typicode.com/photos')
                .then(obj => obj.json())
        },
        decrement: (state) => {
            state.data -= 1
        },
        incrementByAmount: (state, action) => {
            state.data += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
