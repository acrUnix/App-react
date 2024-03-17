import { useState } from 'react'

const CreateNotes = ({ createNote, userId }) => {
    
    const [newContent, setNewContent] = useState('')
    const [newTitle, setNewTitle] = useState('')
    const [newGender, setNewGender] = useState('')
    const [newImportant, setNewImportant] = useState('')

    const addNote = (event) => {
        event.preventDefault()

        createNote({
            title: newTitle,
            gender: newGender,
            content: newContent,
            important: newImportant,
            userId: userId
        })
       
        setNewContent('')
        setNewGender('')
        setNewTitle('')
        setNewImportant('')
    }

    return (
        <div>
      <h2>Create new note</h2>

      <form onSubmit={addNote}>

        <input id='content'
        placeholder="escriba su nota"
        value={newContent}
        onChange={event => setNewContent(event.target.value)}
        />
           <input id='title'
           placeholder='title'
           value={newTitle}
           onChange={event => setNewTitle(event.target.value)}
          />
           <input id='gender'
           placeholder='gender'
           value={newGender}
           onChange={event => setNewGender(event.target.value)}
           />
           <input id='important'
           placeholder='important, true or false?'
           value={newImportant}
           onChange={event => setNewImportant(event.target.value)}
           />
        <button id='create' type="submit">create</button>
      </form>
    </div>
    )
}

export { CreateNotes } 