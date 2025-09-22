import React, {  useContext } from 'react'
import { UserContext } from './Usecontext'

export default function Counter() {
    const{Counter1,setcounter}=useContext(UserContext)
    const incriment =()=>{
        setcounter(Counter1+1)

    }
    const decrement =()=>{
        setcounter(Counter1-1)
    }
  return (
    <div>
        <h1> counter{Counter1}</h1>
      <button onClick={incriment}>incriment</button>
      <button onClick={decrement}>decriment</button>
    </div>
  )
}
