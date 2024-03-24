import { RenderListNotes } from "./components/renderListNotes"
import { useState, useEffect, useRef } from "react"
import { getAllNotes, postNotes, tokenUser, updatePost } from "./services/notes/axiosNotes"
import { loginUser } from "./services/users.js/axiosUsers"
import { LoginForm } from "./components/loginForm"
import Togglable from "./components/togglable"
import TogglableLogin from "./components/togglableLogin"
import { CreateNotes } from "./components/createNewNotes"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addUser } from "./redux/userSlice"
import { getNotes, loadNotes } from "./redux/notesSlice"
import { newNotesAdd } from "./redux/notesSlice"


const App = () => {

    const [showAll, setShowAll] = useState(true)
    
    const users = useSelector((state) => state.user)
    const notes = useSelector((state) => state.notes.notes)
    const dispatch = useDispatch()

    const noteFormRef = useRef()

    useEffect(() => {
        console.log('resultado de useEffect: ')
        dispatch(getNotes())
    }, [dispatch])
/**
useEffect(() => {
        const loggedUser = window.localStorage.getItem('userSession')
        if (loggedUser) {
          const user = JSON.parse(loggedUser)
          setUser(user)
          tokenUser(user.token)
        }
      }, [])
      */
   


      const notesToShow = showAll ? notes
      : notes.filter(note => note.important === true)



      const toggleImportanceOf = async (id) => {
       
        const note = notes.find(e => e.id === id)
        const noteChanged = {...note, important: !note.important}
    
        await updatePost(id, noteChanged)
        .then(data => {
            console.log('recibido desde server 3: ', data)
            dispatch(loadNotes(notes.map(note => note.id !== id ? note : data)))
        })
        
      }

 


    const axiosLogin = async (userDate) => {
        try{
   
        await loginUser(userDate)
        .then(user => {
            console.log(user.name, ' ha iniciado sesion')
            console.log('con id: ', user.id)

            /**window.localStorage.setItem(
                'userSession', JSON.stringify(user)
              )*/

            dispatch(addUser(user))
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
            dispatch(newNotesAdd(note))
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
        {!users && loginForm()}
            {users &&
            <div>
             <p className="nameUser">{users.name } <strong className="loggedUser">  - logged in</strong></p>
                <div>
                    <button onClick={() => setShowAll(!showAll)}>
                        {showAll ? 'watch only important notes' : 'watch all notes' }
                    </button>
                </div>
                    <Togglable buttonLabel="new note" ref={noteFormRef}>
                        <CreateNotes createNote={createNewNote} userId={users.id}/>
                    </Togglable> 
            </div>
            } 

        <ul className="noteList">
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