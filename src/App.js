import  RenderList  from "./render"
import { useState, useEffect } from "react"
import { getAllNotes, postNotes } from "./services/notes/axiosNotes"
import { loginUser } from "./services/users.js/axiosUsers"




const App = () => {
    
    const [notes, setNotes] = useState([])
    const [newNotes, setNewNotes] = useState('')
    const [loading, setLoading] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [datosUser, setDatos] = useState('')


    useEffect(()=>{
        setLoading(true)
        
        getAllNotes()
        .then(data => {
            console.log('se encontro 2: ', data)
            setNotes(data)
            setLoading(false)
        })
            
    }, [])

    const handleChange = (event)=>{

        const newNot = event.target.value
        setNewNotes(newNot)
    }

    const handleLoginChange = (event) => {
        event.preventDefault()
        const datos = {
            username,
            password
        }
        console.log('datos enviados: ', datos)
        loginUser(datos)
        .then(user => {
            console.log('se actualizo setDatos con: ', user.name)
            setDatos(user.name)
        })
    }


    const createNote = async (event) => {
        event.preventDefault();
        const newNs = {
            name: 'colosal',
            country: 'eeuu',
            userId: '65dd5ad1e5786d972b0a2085',
            content: newNotes

        }

        postNotes(newNs)
        .then(note => {
            setNotes(prevNota => prevNota.concat(note))
        })

        setNewNotes("")
    }
    

    return (
    <div>
        {datosUser ? <p>{`${datosUser} ha iniciado sesion`}</p> : <p>Login</p>}
<form onSubmit={handleLoginChange}>
<input
type='text'
name='Username'
placeholder='Username'
value={username}
onChange={({target}) => setUsername(target.value)}
/>
<input
type='password'
name='Password'
placeholder='Pasword'
value={password}
onChange={({target}) => setPassword(target.value)}/>
<button>login</button>
</form>
<p>{} </p>
            <h1>Notas</h1>
            <small>{loading ? console.log('cargando...') : console.log('carga finalizada')}</small>
            <ol>
                {notes.map(note => <RenderList key={note.pos} {...note}/>)}
            </ol>
 
            <form onSubmit={createNote}>
                <input type='text' onChange={handleChange} value={newNotes}/>
                <button>crear nota</button>
            </form>
        </div>

        )
}



export default App