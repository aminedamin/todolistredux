import { useState } from "react"
import { useSelector } from "react-redux"
import Card from "./Card"

const List =()=>{
const [test,setTest]=useState()
const tasks=useSelector(state=>state.tasks)
return (
    <div>

        <button onClick={()=>setTest("All")}>All</button>
        <button onClick={()=>setTest("Done")}>Done</button>
        <button onClick={()=>setTest("Undone")}>Undone</button>
        {
          test=="All" ?  
        tasks.map(el=><Card el={el}/>)
        :
        test=="Done" ?
        tasks.filter(el=>el.isDone ==false).map(el=><Card el={el}/>)
        :
        tasks.filter(el=>el.isDone == true).map(el=><Card el={el}/>)
        }
    </div>
)
}
export default List