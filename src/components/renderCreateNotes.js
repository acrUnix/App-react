
import { useState } from "react"



const RenderCreateNotes = ({ createNote, userId }) => {
    
    const [newNotes, setNewNotes] = useState('')

    const addNote = (event) => {
        event.preventDefault()
        createNote({
            name: 'colosal',
            country: 'eeuu',
            content: newNotes,
            userId: userId
        })
       
        setNewNotes('')
    }

    return (
        <div>
      <h2>Create a new note</h2>

      <form onSubmit={addNote}>
        <input
          value={newNotes}
          onChange={event => setNewNotes(event.target.value)}
          />
        <button type="submit">create</button>
      </form>
    </div>
    )
}

export { RenderCreateNotes }