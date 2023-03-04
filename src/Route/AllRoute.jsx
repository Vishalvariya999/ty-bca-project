import React from 'react'
import {  useRoutes } from 'react-router-dom'
import Slidebar from '../components/Slidebar'
import Form from '../components/Form'
import AddManager from '../pages/AddManager'
import Login from '../components/Login'
import ProtectRoute from './ProtectRoute'
import Dashboard from '../components/MainDashBoard'
import AddMenager from '../components/AddManeger'
import AddClient from '../components/AddClient'
import ShowManeger from '../components/ShowManeger'
import ShowEmployee from '../components/ShowEmployee'


const AllRoute = () => {
  const data = useRoutes([
    {
        path: "/",
        element: <Slidebar> <ProtectRoute><Dashboard /></ProtectRoute> </Slidebar>  
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/maneger",
        element: <Slidebar> <ProtectRoute><AddMenager /></ProtectRoute> </Slidebar> ,
        children: [
            {
                path: "/maneger/addmaneger",
                element:  <AddManager />
            }
        ]
    },
    {
        path: "employee",
        element: <Slidebar> <ProtectRoute><Form /></ProtectRoute> </Slidebar>
    },
    {
        path: "showmaneger",
        element: <Slidebar> <ProtectRoute><ShowManeger /></ProtectRoute> </Slidebar>
    },
    {
        path: "showemplaoyee",
        element: <Slidebar> <ProtectRoute><ShowEmployee /></ProtectRoute> </Slidebar>
    },
    {
        path: "/client",
        element: <Slidebar> <ProtectRoute><AddClient /></ProtectRoute> </Slidebar>
    },
  ])
  return data
}

export default AllRoute