import axios from "axios"

let token = null
const baseUrl = 'http://localhost:3001/api/notes'


const tokenUser = tok => {
    token = `Bearer ${tok}`
}


const getAllNotes = async () => {
    return await axios.get(`${baseUrl}/allnotes`)
    .then(response => {
        return response.data
    })

}


const postNotes = async (newNts) => {
    const config = {
        headers: {
            Authorization: token
        }
    }
    return await axios.post(`${baseUrl}/newnote`, newNts, config)
    .then(response => {
        console.log('note created on client: ', response.data)
        return response.data
    })
    .catch(error => {
        console.log('fallo la operacion: ', error.message)
    })
}


/*const updatePost = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
  }*/

export { getAllNotes, postNotes, tokenUser }