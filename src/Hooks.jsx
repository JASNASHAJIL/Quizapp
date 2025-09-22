import React, { useState } from 'react'

export default function Hooks() {
    const [name ,setname] = useState("")
    const setvalue=(event)=>{
        setname(event.target.value)
    }
  return (
    <div>
        <input type="text" value={name} onChange={setvalue} placeholder='enter name'/>
        <h1> hello{name}</h1>
      
    </div>
  )
}
 