import { useDispatch } from "react-redux"
import { delettask, donetask } from "../Redux/Action"

const Card=({el})=>{
    const dispatch=useDispatch()
    return(
        <div>
               <h3>{el.text}</h3>
               <button onClick={()=>dispatch(delettask(el.id))}>Delete</button>
               <button onClick={()=>dispatch(donetask(el.id))}>{el.isDone ? "undone":"done"}</button>
        </div>
    )
}
export default Card