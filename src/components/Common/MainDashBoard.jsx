import React, { useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { getEmployees, getManegers, getProject } from '../../Redux/Action/Action'

const MainDashBoard = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { getManeger, getEmployee, getProjects } = useSelector((stat) => stat.LoginEx)
    useEffect(() => {
        dispatch(getEmployees())
        dispatch(getManegers())
        dispatch(getProject())
    }, [])
    const role = localStorage.getItem("role")
    return (
        <>
            <div className="main">
                <div className="searchbar2">
                    <input type="text"
                        name=""
                        id=""
                        placeholder="Search" />
                    <div className="searchbtn">
                        <img src=
                            "https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
                            className="icn srchicn"
                            alt="search-button" />
                    </div>
                </div>

                <div className="box-container">

                    <div className="box box1">
                        <div className="text">
                            <h2 className="topic-heading">{getProjects?.length}</h2>
                            <h2 className="topic">Projects</h2>
                        </div>

                        <img src=
                            "https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(31).png"
                            alt="Views" />
                    </div>

                    <div className="box box2">
                        <div className="text">
                            <h2 className="topic-heading">{getEmployee?.length}</h2>
                            <h2 className="topic">Employees</h2>
                        </div>

                        <img src=
                            "https://media.geeksforgeeks.org/wp-content/uploads/20221210185030/14.png"
                            alt="likes" />
                    </div>

                    <div className="box box3">
                        <div className="text">
                            <h2 className="topic-heading">{getManeger?.length}</h2>
                            <h2 className="topic">Manegers</h2>
                        </div>

                        <img src=
                            "https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(32).png"
                            alt="comments" />
                    </div>
                </div>
                <div className="report-container">
                    <div className="report-header">
                        <h1 className="recent-Articles">Employes List</h1>
                        {
                            role === "SuperAdmin" || role === "HR" &&
                            <button className="view" onClick={() => navigate("/showemplaoyee")}>View All</button>
                        }
                    </div>
                    <div className="report-body">
                        <div className="table-responsive">
                            <table className='table  table-bordered'>
                                <thead className='table table-primary'>
                                    <tr>
                                        <th>Name</th>
                                        <th>E-mail</th>
                                        <th>Mobile</th>
                                        <th>Address</th>
                                        <th>Birth Date</th>
                                        <th>Date of Joining</th>
                                        <th>Status</th>
                                        <th>Role</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getEmployee?.slice(-3).map((data) => {
                                            return <tr key={data.id}>
                                                <td>{data.name}</td>
                                                <td>{data.email}</td>
                                                <td>{data.mobile}</td>
                                                <td>{data.address}</td>
                                                <td>{data.birth_date}</td>
                                                <td>{data.date_of_joining}</td>
                                                <td>{data.status}</td>
                                                <td>{data.role}</td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainDashBoard