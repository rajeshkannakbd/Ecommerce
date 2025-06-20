import React, { useContext } from 'react'
import { cartContext } from '../../App'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
 const{isAunthencate,role} = useContext(cartContext)
  return (isAunthencate || role === "admin" ? children : <Navigate to="/"/>)
}
export default ProtectedRoute