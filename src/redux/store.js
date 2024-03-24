import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import noteReducer from './notesSlice'

export const store = configureStore({
    reducer: {
        users: userReducer,
        notes: noteReducer
    }
})