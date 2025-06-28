import React from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
import {Link} from "react-router-dom"

const UserDetail = () => {
  const [users,setUsers] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/users")
    .then((data)=>setUsers(data.data.users))
    .catch((err)=>console.log("Error while getting Users",err)
    )
  },[])
 
  
  return (
    <div className=' grid grid-cols-3 mx-18 px-4 w-full' >
      
     {
      users.map((user,index)=>(
     <div key={user._id} className=' h-[200px] shadow-md w-[400px] mt-2 mb-2 border-2 flex flex-col gap-4 text-wrap'>
       <h1 className=' relative top-2 left-3  '>{index + 1})</h1>
        <h1 className=' mx-4 mb-0'>Name : {user.name} </h1>
        <h1 className=' m-2 mx-4 mb-0'>Email : {user.email} </h1>
        {/* <h1 className=' m-4 mb-0 text-wrap'>Password : {user.password} </h1> */}
        <h1 className=' mx-4 m-2 mb-0'>Role : {user.role} </h1>
     </div>))
     }
    </div>
  )
}

export default UserDetail
