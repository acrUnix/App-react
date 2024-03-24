import { useState } from "react"
import PropTypes from 'prop-types'


const LoginForm = ({ axiosLogin }) => {

const [username, setUsername] = useState('')
const [password, setPassword] = useState('')

const handleLogin = async (event) => {
    event.preventDefault()
    try{
        
    axiosLogin({
        username,
        password
    })

    setUsername('')
    setPassword('')

} catch (error){
        console.log(error)
    }
}


LoginForm.propTypes = {
    axiosLogin: PropTypes.func.isRequired
}

    return (
         <div>
            <form className="loginForm" onSubmit={handleLogin}>
    
        <div>
            user
                <input
                id="username"
                type='text'
                name='Username'
                placeholder='Username'
                value={username}
                onChange={({target}) => setUsername(target.value)}
                />
        </div>
        <div>
            password
                <input
                id="password"
                type='password'
                name='Password'
                placeholder='Pasword'
                value={password}
                onChange={({target}) => setPassword(target.value)}
                />
        </div>
        <button id="loginSession">login</button>
        </form>
    </div>
        
    )
}

export { LoginForm }