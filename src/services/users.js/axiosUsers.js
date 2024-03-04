import axios from 'axios'

const loginUser = async ( datos ) => {
    return await axios.post('http://localhost:3001/api/login/loginuser', {
        username: datos.username,
        password: datos.password
    })
    .then(response => {
       return response.data
    })
    .catch(error => {
        console.log(error)
    })
}
export { loginUser }