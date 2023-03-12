import React from 'react'
import { useRoutes } from 'react-router-dom'
import Slidebar from '../components/Admin/Slidebar'
import Form from '../components/HR/AddEmployee'
import Login from '../components/Common/Login'
import ProtectRoute from './ProtectRoute'
import Dashboard from '../components/Common/MainDashBoard'
import AddMenager from '../components/Admin/AddManeger'
import AddClient from "../components/Admin/AddClient"
import ShowManeger from '../components/Admin/ShowManeger'
import ShowEmployee from '../components/Admin/ShowEmployee'
import AddProject from '../components/Admin/AddProject'
import HrSlidebar from '../components/HR/HrSilideBar'
import ManegerSlidebar from '../components/Manager/ManagerDashboard'
import ProjectDetail from '../components/Manager/ProjectDetail'
import AddHR from '../components/Admin/AddHR'
import ShowLeave from '../components/Admin/ShowLeave'
import ShowHrDetail from '../components/Admin/ShowHrDetail'
import ShowProjectDetail from '../components/Admin/ShowProject'
import GiveTask from '../components/Admin/GiveTask'
import GetTaskHr from '../components/HR/GetTaskHr'
import ShowHrLeave from '../components/HR/ShowHrLeave'
import ShowManegerLeave from '../components/Manager/ShowManegerLeave'
import ShowManagerTask from '../components/Manager/ShowManagerTask'
import GetAllClient from '../components/Admin/GetAllClient'
import EmployeeSlidebar from '../components/Employee/EmployeeSlidebar'
import Pagination from '../components/Admin/Pagination'
import AddAward from '../components/HR/AddAward'


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
            path: "AddHR",
            element: <Slidebar> <ProtectRoute><AddHR /></ProtectRoute> </Slidebar>
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
            path: "/showleave",
            element: <Slidebar> <ProtectRoute><ShowLeave /></ProtectRoute> </Slidebar>
        },
        {
            path: "/showhr",
            element: <Slidebar> <ProtectRoute><ShowHrDetail /></ProtectRoute> </Slidebar>
        },
        {
            path: "/showproject",
            element: <Slidebar> <ProtectRoute><ShowProjectDetail /></ProtectRoute> </Slidebar>
        },
        {
            path: "/showclient",
            element: <Slidebar> <ProtectRoute><GetAllClient /></ProtectRoute> </Slidebar>
        },
        {
            path: "/task",
            element: <Slidebar> <ProtectRoute><GiveTask /></ProtectRoute> </Slidebar>
        },
        {
            path: "/page",
            element: <Slidebar> <ProtectRoute><Pagination /></ProtectRoute> </Slidebar>
        },
        {
            path: "*",
            element: <><Slidebar ><h2 className='text-center text-danger'>Page Not Found</h2></Slidebar></>
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
            path: "/getTask",
            element: <HrSlidebar> <ProtectRoute><GetTaskHr /></ProtectRoute> </HrSlidebar>
        },
        {
            path: "/showhrleave",
            element: <HrSlidebar> <ProtectRoute><ShowHrLeave /></ProtectRoute> </HrSlidebar>
        },
        {
            path: "showemplaoyee",
            element: <HrSlidebar> <ProtectRoute><ShowEmployee /></ProtectRoute> </HrSlidebar>
        },
        {
            path: "addaward",
            element: <HrSlidebar> <ProtectRoute><AddAward /></ProtectRoute> </HrSlidebar>
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
            path: "showLeavemaneger",
            element: <ManegerSlidebar> <ProtectRoute><ShowManegerLeave /></ProtectRoute> </ManegerSlidebar>
        },
        {
            path: "showtask",
            element: <ManegerSlidebar> <ProtectRoute><ShowManagerTask /></ProtectRoute> </ManegerSlidebar>
        },
        {
            path: "*",
            element: <Login />
        }
    ])
    const data4 = useRoutes([
        {
            path: "/",
            element: <EmployeeSlidebar> <ProtectRoute><Dashboard /></ProtectRoute> </EmployeeSlidebar>
        },
        {
            path: "/login",
            element: <Login />
        },

    ])
    if (role === "SuperAdmin") {
        return data
    } else if (role === "HR") {
        return data2
    } else if (role === "MANAGER") {
        return data3
    } else {
        return data4
    }
}

export default AllRoute