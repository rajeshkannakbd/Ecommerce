import React, { useContext } from 'react'
import { cartContext } from '../../App'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
 const{isAunthencate,setIsAuthencate} = useContext(cartContext)
  return (isAunthencate ? children : <Navigate to="/login"/>)
}
export default ProtectedRoute 
