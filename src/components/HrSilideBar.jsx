import React from 'react'
import { Accordion } from 'react-bootstrap';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { BiAnalyse, BiCog, BiUserCircle } from 'react-icons/bi';
import { FaMicrosoft, FaBars, FaHome, FaFistRaised, FaAward, FaUsers, FaRupeeSign, FaUserPlus, FaPowerOff } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';


const HrSlidebar = ({ children }) => {
    const navigate = useNavigate()
    const toggleBtn = () => {
        let nav = document.querySelector(".navcontainer");
        nav.classList.toggle("navclose");
    }
    const logout = () => {
        localStorage.removeItem('role')
        localStorage.removeItem('token')
        localStorage.setItem('Login', false)
        navigate("/login")
    }
    return (
        <>
            <div classNameName='conainer-fluid'>
                <header>
                    <div className="logosec">
                        <img src=
                            "https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png"
                            className="icn menuicn"
                            id="menuicn"
                            alt="menu-icon" onClick={toggleBtn} />
                    </div>
                    <div className="searchbar">
                        <input type="text"
                            placeholder="Search" />
                        <div className="searchbtn">
                            <img src=
                                "https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
                                className="icn srchicn"
                                alt="search-icon" />
                        </div>
                    </div>

                    <div className="message">
                        <div className="circle"></div>
                        <img src=
                            "https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/8.png"
                            className="icn"
                            alt="" />
                        <div className="dp bg-light">
                            <FaPowerOff className='bg-light fs-3' onClick={() => logout()} />
                        </div>
                    </div>
                </header>
                <div className="main-container">
                    <div className="navcontainer">
                        <nav className="nav">
                            <div className="nav-upper-options">
                                <NavLink className="text-dark fw-bold text-decoration-none" to={'/'}>
                                    <div className="option2 nav-option">
                                        <FaHome className='fs-5' />
                                        <h6>Dashboard</h6>
                                    </div>
                                </NavLink>
                                <NavLink className="text-dark fw-bold text-decoration-none" to={'/employee'}>
                                    <div className="option2 nav-option">
                                        <FaUsers className='fs-5' />
                                        <h6>Add Employee</h6>
                                    </div>
                                </NavLink>
                                <NavLink className="text-dark fw-bold text-decoration-none" to={'/getTask'}>
                                    <div className="option2 nav-option">
                                        <FaUsers className='fs-5' />
                                        <h6> Task</h6>
                                    </div>
                                </NavLink>
                                <NavLink className="text-dark fw-bold text-decoration-none" to={'/p'}>
                                    <div className="option2 nav-option">
                                        <FaFistRaised className='fs-5' />
                                        <h6>Attendence</h6>
                                    </div>
                                </NavLink>
                                <NavLink className="text-dark fw-bold text-decoration-none" to={'/p'}>
                                    <div className="option2 nav-option">
                                        <FaAward className='fs-5' />
                                        <h6>Awards</h6>
                                    </div>
                                </NavLink>
                                <NavLink className="text-dark fw-bold text-decoration-none" to={'/showhrleave'}>
                                    <div className="option2 nav-option">
                                        <FaAward className='fs-5' />
                                        <h6>Leave Report</h6>
                                    </div>
                                </NavLink>
                                <NavLink className="text-dark fw-bold text-decoration-none" to={'/p'}>
                                    <div className="option2 nav-option">
                                        <FaAward className='fs-5' />
                                        <h6>Leave Apply</h6>
                                    </div>
                                </NavLink>
                                <NavLink className="text-dark fw-bold text-decoration-none" to={'/p'}>
                                    <div className="option2 nav-option">
                                        <FaAward className='fs-5' />
                                        <h6>Notice</h6>
                                    </div>
                                </NavLink>
                            </div>
                        </nav>
                    </div>
                    <div className="main">

                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HrSlidebar