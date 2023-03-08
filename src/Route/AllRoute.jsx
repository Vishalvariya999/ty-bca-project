import React from 'react'
import { useRoutes } from 'react-router-dom'
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
import AddProject from '../components/AddProject'
import HrSlidebar from '../components/HrSilideBar'
import ManegerSlidebar from '../components/ManagerDashboard'
import ProjectDetail from '../components/ProjectDetail'


const AllRoute = () => {
    const role = localStorage.getItem("role")
    // console.log('JSON.parse(role)', role)
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
            element: <Slidebar> <ProtectRoute><AddMenager /></ProtectRoute> </Slidebar>,
            // children: [
            //     {
            //         path: "/maneger/addmaneger",
            //         element: <AddManager />
            //     }
            // ]
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
            path: "addproject",
            element: <Slidebar> <ProtectRoute><AddProject /></ProtectRoute> </Slidebar>
        },
        {
            path: "/client",
            element: <Slidebar> <ProtectRoute><AddClient /></ProtectRoute> </Slidebar>
        },
        {
            path: "*",
            element: <><h2 className='text-center text-danger'>Page Not Found</h2></>
        }
    ])

    const data2 = useRoutes([
        {
            path: "/",
            element: <HrSlidebar> <ProtectRoute><Dashboard /></ProtectRoute> </HrSlidebar>
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/employee",
            element: <HrSlidebar> <ProtectRoute><Form /></ProtectRoute> </HrSlidebar>
        },
        {
            path: "*",
            element: <Login />
        }
    ])
    const data3 = useRoutes([
        {
            path: "/",
            element: <ManegerSlidebar> <ProtectRoute><Dashboard /></ProtectRoute> </ManegerSlidebar>
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "projectdetail",
            element: <ManegerSlidebar> <ProtectRoute><ProjectDetail /></ProtectRoute> </ManegerSlidebar>
        },
        {
            path: "*",
            element: <Login />
        }
    ])
    if (role === "SuperAdmin") {
        return data
    } else if (role === "HR") {
        return data2
    } else {
        return data3
    }
}

export default AllRoute