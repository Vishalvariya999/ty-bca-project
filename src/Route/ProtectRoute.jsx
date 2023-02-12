import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Navigate, Route } from 'react-router-dom'
const ProtectRoute = ({children}) => {
    const {isLogin} = useSelector((stat) => stat.LoginEx)
    if(!isLogin){
        return <Navigate  to="/login"/>
    }
  return children
}

export default ProtectRoute