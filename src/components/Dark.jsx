import React, { useContext } from 'react'
import { UserContext } from './Usecontext'

export default function Dark() {
    const{theme,setTheme}=useContext(UserContext)
    const toggle=()=>{
        setTheme(theme=="light"?"dark":"light")
    }
  return (
    <div>
      <button onClick={toggle}>toggle here</button>
      <p> current theme ======  {theme}</p>
    </div>
  )
}
