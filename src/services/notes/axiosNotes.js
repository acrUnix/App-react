import axios from "axios"

let token = null
const baseUrl = 'http://localhost:8080/api/notes'


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


const updatePost = async (id, newObject) => {
    const config = {
        headers: {
            Authorization: token
        }
    }
    return await axios.put(`${baseUrl}/update/${id}`, newObject, config)
    .then(response => {
        return response.data
    })
}

export { getAllNotes, postNotes, updatePost, tokenUser }