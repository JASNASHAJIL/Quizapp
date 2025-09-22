import React, { useReducer } from 'react'

export default function Reddark() {
    const themereducer = (state,action)=>{
        switch(action.type){
            case "toggle":
                return state=="off"?"on":"off";
                default:return state;
        }
    }
    const[theme,dispatch]=useReducer(themereducer,"off")
  return (
    <div>
      <button onClick={()=>dispatch({type:"toggle"})}>toggle here</button>
      <h1>ligh is    {theme} </h1>
    </div>
  )
}
