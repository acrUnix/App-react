import  RenderList  from "./render"
import { useState, useEffect } from "react"
import { getAllNotes } from "./services/notes/getAllNotes"
import { postNotes } from "./services/notes/postNotes"




const App = ()=> {
    
    const [notes, setNotes] = useState([])
    const [newNotes, setNewNotes] = useState('')
    const [loading, setLoading] = useState(false)


    useEffect(()=>{
    
        setLoading(true);

        getAllNotes()
        .then(date => {
            console.log({date})
            setNotes(date)
            setLoading(false)
        })

        
            
    }, []) ;

   

    const handleChange = (event)=>{
        const newNot = event.target.value;
        setNewNotes(newNot)
    }


    const handleSubmit = (event)=>{

        event.preventDefault();

        const newNs = {
            name: 'colosal',
            country: 'eeuu',
            content: newNotes
        }

        postNotes(newNs)
        .then(nota => { 
            setNotes(prevNota => prevNota.concat(nota))
        })

        setNewNotes("");
       
    }
    

    return (

        <div>

            <h1>Notas</h1>
            <small>{loading ? console.log('cargando...') : console.log('carga finalizada')}</small>
            <ol>
                {notes.map(note => <RenderList key={note.id} {...note}/>)}     
            </ol>

            <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleChange} value={newNotes}/>
                <button>crear nota</button>
            </form>
        </div>

        )
}



export default App