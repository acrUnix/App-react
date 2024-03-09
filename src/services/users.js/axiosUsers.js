import axios from 'axios'

const loginUser = async ( datos ) => {
    try{
        return await axios.post('http://localhost:3001/api/login/loginuser', datos)
    .then(response => {
       return response.data
    })
    } catch (error){
        console.log(error)
    }
}
export { loginUser }