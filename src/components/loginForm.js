


const LoginForm = ({ 
    handleLogin,
    handleUsernameChange,
    handlePasswordChange,
    username,
    password
}) => {
    return (
        <div>
            <form onSubmit={handleLogin}>
    
<div>
    usuario
<input
type='text'
name='Username'
placeholder='Username'
value={username}
onChange={handleUsernameChange}
/>
</div>
<div>
    contraseña
<input
type='password'
name='Password'
placeholder='Pasword'
value={password}
onChange={handlePasswordChange}/>
</div>
<button>login</button>
</form>
        </div>
        
    )
}

export { LoginForm }