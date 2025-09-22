import React, { useState } from 'react'
import { UserContext } from './Usecontext'
import Profile from './Profile'
import Counter from './Counter'
import Dark from './Dark'


export default function Use() {
    
    const [user1 ,setuser]=useState({name:"jesy",loggedin:true})
    const [Counter1 ,setcounter]=useState(0)
    const [theme , setTheme] =useState("dark")
  return (
    <div>
      <UserContext.Provider value={{user1,setuser,Counter1,setcounter,theme,setTheme}}>
        
        <Profile/>
        <Counter/>
        <Dark/>

      </UserContext.Provider>

    </div>
  )
}
