import { useState } from "react"

const RenderListNotes = ({note, toggleImportance})=>{

    const label = note.important
    ? 'marcar como "no importante"' : 'marcar como "importante"'

    const [visible, setVisible] = useState(false)
    const hideVisible = {display: visible ? 'none' : ''}
    const showVisible = {display: visible ? '' : 'none'}

    const Visibility = () => {
        setVisible(!visible)
    }

    const name = note.users[0].name
    const id = note.users[0].id
    const username = note.users[0].username

    return(

    <li className="note">
        <h3><strong>{note.title}  -  liks {43}</strong></h3>
        <p>{note.gender}</p>
        <p>{note.content}</p>
        
    <button onClick={toggleImportance}>{label}</button>

      <div style={hideVisible}>
            <button onClick={Visibility}>mostrar detalles</button>
      </div>

      <div style={showVisible}>
        <h5>Datos del autor</h5>
            <p>user:   <strong>{name ? name : 'sin nombre'}</strong></p>
            <p>id:   {id ? id : 'sin id'}</p>
            <p>username:  {username ? username : 'sin username'}</p>
       </div>
        
        <div style={showVisible}>
            <button onClick={Visibility}>ocultar</button>
        </div>
    </li>
    
    )
}

export { RenderListNotes }

/**      <div style={showVisible}>
        <h5>Datos del autor</h5>
            <p>user:   <strong>{note['users'][0].name}</strong></p>
            <p>id:   {note['users'][0].id}</p>
            <p>nombre de usuario:  {note['users'][0].username}</p>
       </div>
        
        <div style={showVisible}>
            <button onClick={Visibility}>ocultar</button>
        </div>*/