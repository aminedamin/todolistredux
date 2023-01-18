import { ADDTASK, DELETTASK, DONETASK } from "./Actiontypes"

export const addtask=(payload)=>{
    return(
        {
            type:ADDTASK ,
            payload
        }
    )
}

export const delettask=(payload)=>{
    return(
        {
        type:DELETTASK ,
        payload
    }
    )
}

export const donetask=(payload)=>{
    return(
        {
            type : DONETASK,
            payload
        }
    )
}