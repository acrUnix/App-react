import axios from "axios"

const baseUrl = 'http://localhost:3001/api/notes'

const getAllNotes = async () => {
    return await axios.get(`${baseUrl}/allnotes`)
    .then(response => {
        return response.data
    })

}


const postNotes = async newNts => {
    return await axios.post(`${baseUrl}/newnote`, newNts)
    .then(response => {
        return response.data
    })
    .catch(error => {
        console.log(error)
    })
}


/*const updatePost = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
  }*/

export {
    getAllNotes,
    postNotes
}