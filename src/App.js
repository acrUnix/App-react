import { RenderListNotes } from "./components/renderListNotes"
import { useState, useEffect } from "react"
import { getAllNotes, postNotes, tokenUser } from "./services/notes/axiosNotes"
import { loginUser } from "./services/users.js/axiosUsers"
import { RenderCreateNotes } from "./components/renderCreateNotes"
import { LoginForm } from "./components/loginForm"
import Togglable from "./components/togglable"




const App = () => {
    
    const [notes, setNotes] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loginVisible, setLoginVisible] = useState(false)
    const [user, setUser] = useState('')


    useEffect(()=>{
        getAllNotes()
        .then(data => {
            console.log('se encontro 2: ', data)
            setNotes(data)
        })
            
    }, [])


    useEffect(() => {
        const loggedUser = window.localStorage.getItem('userSession')
        if (loggedUser) {
          const user = JSON.parse(loggedUser)
          setUser(user)
          tokenUser(user.token)
        }
      }, [])



    const handleLogin = async (event) => {
        event.preventDefault()
        try{
        const datos = {
            username,
            password
        }
        await loginUser(datos)
        .then(user => {
            console.log(user.name, ' ha iniciado sesion')
            console.log('con id: ', user.id)
            window.localStorage.setItem(
                'userSession', JSON.stringify(user)
              )
            setUser(user)
            setUsername('')
            setPassword('')
        })
    } catch (error){
            console.log(error)
        }
        
    }



    const createNewNote = async (newNotes) => {

        tokenUser(user.token)
        await postNotes(newNotes)
        .then(note => {
            setNotes(prevNota => prevNota.concat(note))
        })
    }
    


const loginForm = () => {
    const hideWhenVisible = { display: loginVisible ? 'none' : '' }
    const showWhenVisible = { display: loginVisible ? '' : 'none' }
    return (
        <div>
          <div style={hideWhenVisible}>
            <button onClick={() => setLoginVisible(true)}>log in</button>
          </div>
          <div style={showWhenVisible}>
            <LoginForm
              username={username}
              password={password}
              handleUsernameChange={({ target }) => setUsername(target.value)}
              handlePasswordChange={({ target }) => setPassword(target.value)}
              handleLogin={handleLogin}
            />
            <button onClick={() => setLoginVisible(false)}>cancel</button>
          </div>
        </div>
      )
    }




return (

    <div>

        <h1>Notas</h1>

        {!user && loginForm()}
            {user &&
            <div>
            <p>{user.name} logged in</p>

            <Togglable buttonLabel="new note">
                <RenderCreateNotes createNote={createNewNote} userId={user.id}/>
            </Togglable>
            </div>
            } 

        <ul>
            {notes.map(note => 
            <RenderListNotes
                key={note.pos}
                note={note}
            />
            )}
        </ul>
                    
    </div>

    )
}



export default App