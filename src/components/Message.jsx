import React, { useReducer } from 'react'

export default function Message() {
    const initialstate ={
        Message:"",
    };
    const messageset =(state, action)=>{
        switch(action.type){
            case "setmessage":
                return{message:action.payload};
            case "clearmessage":
                return{message:""}
                default:return state;
        }

    }
    const[display ,dispatch]=useReducer(messageset,initialstate)
  return (
    <div>
      <button onClick={()=>dispatch({type:"setmessage",payload:"i am the reducer"})

      }>setmessage</button>
      <button onClick={()=>dispatch({type:"clearmessage"})}>clear message</button>
      <p>{display.message}</p>
    </div>
  )
}
