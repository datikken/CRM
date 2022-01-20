import { configureStore } from '@reduxjs/toolkit'
import apiReducer from './Slices/api'

export const store = configureStore({
    reducer: {
        api: apiReducer
    },
})
