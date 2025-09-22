import React, { useReducer } from 'react'

export default function Form() {
  const initialstate={
    name:"",
    email:"",
  };
  const reducer=(state,action)=>{
    switch(action.type){
      case "setfield":
        return { ...state, [action.field]: action.value };
      case "reset":
        return initialstate;
        default:
          return state;
    }

  }
    const [state,dispatch]=useReducer(reducer,initialstate)
    const handlechange =(e)=>{
      const { name, value } = e.target;
      dispatch({type:"setfield",field:name,value})

    }

    
  return (
    <div>
      <input type="text" name='name' value={state.name} placeholder='enter your name' onChange={handlechange}/>
      <input type="text" name='email' value={state.email} placeholder='enter your email' onChange={handlechange}/>
       <button type='button'onClick={()=>{
        alert(`${state.name},${state.email}`)
       }}>submitt</button>
       <button  type='button'onClick={()=>dispatch({type:"reset"})}>reset</button>
    </div>
  )
}                                                                                                                                                               