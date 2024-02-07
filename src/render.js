const RenderList = ({content, name, country})=>{
  
    return(
    <li>
        <h3><strong>{name}</strong></h3>
        <p>{country}</p>
        <p>{content}</p>
    </li>
    )
    }
export default RenderList;