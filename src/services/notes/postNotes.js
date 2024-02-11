import axios from 'axios'

export const postNotes = async (newNts)=>{
    return await axios.post('http://localhost:3001/api/notes', newNts)
    .then((response)=>{
        const newNt = response.data
        return newNt
    })
}