import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"

const HomepageDetails = () =>  {
    const [usercount,setUsercount] = useState(0)
    const [productcount,setProductcount] = useState(0)
    useEffect(()=>{
      axios.get("http://localhost:5000/users")
      .then((data)=>setUsercount(data.data.users.length))
    },[])
  
    useEffect(()=>{
       axios.get("http://localhost:5000/Product")
       .then((data)=>setProductcount(data.data.product.length)
       )
    },[])
  
  return (
    
      //  <div className="m-44 mx-56 border-2 border-slate-300 shadow-lg  rounded h-[100px]  w-[210px]">
      <>
      <h1 className=' absolute top-20 left-96 font-medium text-3xl text-slate-600'>Admin Dashboard</h1>
      <div className=' flex'>
      <div  className="m-44 mx-56 border-2 border-slate-300 shadow-lg  rounded h-[100px]  w-[210px]">
      <h1 className=" m-4 mb-1 text-lg">Number Of Products : <br /> </h1><span className=" mx-[40%] h-10 w-14 rounded-full p-4 text-2xl font-semibold">{productcount}</span>
      <div className=' flex m-10 gap-1 w-full text-blue-500' >
      <h1 className=''>View products</h1><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
    </div></div>

    <div className=" my-44 mx-20 border-2 border-slate-300 shadow-lg  rounded h-[100px] w-[200px]">
      <h1 className=" m-4 mx-6 mb-1 text-lg">Number Of Users : <br /> </h1><span className=" mx-[40%] h-10 w-14 rounded-full p-4 text-2xl font-semibold">{usercount}</span>
     <Link to="/userdetail"><div className=' flex w-full m-10 gap-1 text-blue-500' >
       <h1 className=''>View Users</h1><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
</div></Link>
    </div></div></>
    
  )
}

export default HomepageDetails
