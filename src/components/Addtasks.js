import { useState } from "react"
import { useDispatch } from "react-redux"
import { addtask } from "../Redux/Action"

const Addtasks=()=>{
    const [title,setTitle]=useState("")
    const dispatch=useDispatch()
    return (
        <div>
          <input onChange={(e)=>setTitle(e.target.value)} type="Text"/>
          <button onClick={()=>dispatch(addtask({text: title, id : Math.random() , isDone:false}))}>Add</button>
        </div>  
    )
}

export default Addtasks