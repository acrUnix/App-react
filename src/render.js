const RenderList = ({content, name, country, pos})=>{
    return(
    <li>
        <h3><strong>{name}</strong></h3>
        <p>{country}</p>
        <p>{content}</p>
        <p>posicion {pos}</p>
    </li>
    )
    }
export default RenderList