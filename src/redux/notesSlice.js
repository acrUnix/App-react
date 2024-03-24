import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"


export const getNotes = createAsyncThunk (
    'note/getNotes', async () => {
        try{
            console.log('resultado de axios createAsyncThunk: ')
            const response = await axios.get('http://localhost:8080/api/notes/allnotes')
            if(response){
                console.log('resultado de axios get: ', response.data)
                const result = await response.data
                return { result }
            }
        }catch(error){
            console.log(error)
        }
    })

export const notesSlice = createSlice({
    name: 'note',
    initialState: {
        notes: []
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getNotes.fulfilled, (state, action) => {
            console.log('resultado de builder addCase: ', action.payload.result)
            state.notes = action.payload.result
        })
    }
})

export const { loadNotes, newNotesAdd } = notesSlice.actions
export default notesSlice.reducer



