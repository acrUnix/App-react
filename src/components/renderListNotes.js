const RenderListNotes = ({note})=>{
    return(
    <li className="note">
        <h3><strong>{note.name}</strong></h3>
        <p>{note.country}</p>
        <p>{note.content}</p>
    </li>
    )
}

export { RenderListNotes }