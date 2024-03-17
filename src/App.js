import { RenderListNotes } from "./components/renderListNotes"
import { useState, useEffect, useRef } from "react"
import { getAllNotes, postNotes, tokenUser, updatePost } from "./services/notes/axiosNotes"
import { loginUser } from "./services/users.js/axiosUsers"
import { LoginForm } from "./components/loginForm"
import Togglable from "./components/togglable"
import TogglableLogin from "./components/togglableLogin"
import { CreateNotes } from "./components/createNewNotes"

const App = () => {

    const [notes, setNotes] = useState([])
    const [user, setUser] = useState('')
    const [showAll, setShowAll] = useState(true)

    const noteFormRef = useRef()


    useEffect(()=>{
        getAllNotes()
        .then(data => {
            console.log('notas encontradas: ', data)
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


      const notesToShow = showAll ? notes
      : notes.filter(note => note.important === true)

      const toggleImportanceOf = async (id) => {
       
        const note = notes.find(e => e.id === id)
        const noteChanged = {...note, important: !note.important}
    
        await updatePost(id, noteChanged)
        .then(data => {
            console.log('recibido desde server: ', data)
            setNotes(notes.map(note => note.id !== id ? note : data))
        })
        
      }
 


    const axiosLogin = async (userDate) => {
        try{
   
        await loginUser(userDate)
        .then(user => {
            console.log(user.name, ' ha iniciado sesion')
            console.log('con id: ', user.id)
            window.localStorage.setItem(
                'userSession', JSON.stringify(user)
              )
            setUser(user)
            tokenUser(user.token)
        })
        
    } catch (error){
            console.log(error)
        }
        
    }



    const createNewNote = async (newNotes) => {

        noteFormRef.current.toggleVisibility()
        await postNotes(newNotes)
        .then(note => {
            setNotes(prevNota => prevNota.concat(note))
        })
    }
    


const loginForm = () => {
    return (
    <div>
        <TogglableLogin buttonLabel='login'>
            <LoginForm
              axiosLogin={axiosLogin}
            />
        </TogglableLogin>
        </div>
        
        )
    }


return(

     <div>

        <h1>Notas</h1>

        {!user && loginForm()}
            {user &&
            <div>
            <p>{user.name} logged in</p>
            <div>
        <button onClick={() => setShowAll(!showAll)}>
            {showAll ? 'watch only important notes' : 'watch all notes' }
        </button>
      </div>
            <Togglable buttonLabel="new note" ref={noteFormRef}>
                <CreateNotes createNote={createNewNote} userId={user.id}/>
            </Togglable>
            </div>
            } 

        <ul>
            {notesToShow.map((note, i) =>
            <RenderListNotes
                key={i}
                note={note}
                toggleImportance={() => toggleImportanceOf(note.id)}
            />
            )}
        </ul>
                    
    </div>

    )
}



export default App