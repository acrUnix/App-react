import { createSlice  } from "@reduxjs/toolkit"

const initialState = {
    name: '',
    username: '',
    id: '',
    token: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const { name, username, id, token } = action.payload
            state.name= name,
            state.username= username,
            state.id= id,
            state.token= token
        }
    }
})

export const { addUser } = userSlice.actions
export default userSlice.reducer