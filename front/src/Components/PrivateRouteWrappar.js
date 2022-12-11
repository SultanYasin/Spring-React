import React from 'react'
import { Navigate } from 'react-router-dom'
import LocalStorage from '../util/LocalStorage'

function PrivateRouteWrappar( {children} ) {
    const [token, setToken] = LocalStorage("","token")
  return (
    token ? children : <Navigate to="/login"/>
  )
}

export default PrivateRouteWrappar