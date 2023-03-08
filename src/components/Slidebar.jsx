import React from 'react'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { BiAnalyse, BiCog, BiUserCircle } from 'react-icons/bi';
import { FaMicrosoft, FaPowerOff, FaHome, FaFistRaised, FaAward, FaUsers, FaRupeeSign, FaUserPlus } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';


const Slidebar = ({ children }) => {
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
						<div className="circle "></div>
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
								<NavLink className="text-dark fw-bold text-decoration-none" to={'/maneger'}>
									<div className="option2 nav-option">
										<FaUsers className='fs-5' />
										<h6>Manager</h6>
									</div>
								</NavLink>
								<NavLink className="text-dark fw-bold text-decoration-none" to={'/showmaneger'}>
									<div className="option2 nav-option">
										<FaUsers className='fs-5' />
										<h6>Show Manager</h6>
									</div>
								</NavLink>
								<NavLink className="text-dark fw-bold text-decoration-none" to={'/AddHR'}>
									<div className="option2 nav-option">
										<BiCog className='fs-5' />
										<h6>Add HR </h6>
									</div>
								</NavLink>
								<NavLink className="text-dark fw-bold text-decoration-none" to={'/showhr'}>
									<div className="option2 nav-option">
										<BiCog className='fs-5' />
										<h6>Show HR </h6>
									</div>
								</NavLink>
								<NavLink className="text-dark fw-bold text-decoration-none" to={'/showemplaoyee'}>
									<div className="option2 nav-option">
										<FaUsers className='fs-5' />
										<h6>Show Employee</h6>
									</div>
								</NavLink>
								<NavLink className="text-dark fw-bold text-decoration-none" to={'/client'}>
									<div className="option2 nav-option">
										<BiUserCircle className='fs-5' />
										<h6>Clients</h6>
									</div>
								</NavLink>
								<NavLink className="text-dark fw-bold text-decoration-none" to={'/addproject'}>
									<div className="option2 nav-option">
										<AiOutlineFundProjectionScreen className='fs-5' />
										<h6>Projects</h6>
									</div>
								</NavLink>
								<NavLink className="text-dark fw-bold text-decoration-none" to={'/showproject'}>
									<div className="option2 nav-option">
										<AiOutlineFundProjectionScreen className='fs-5' />
										<h6>Show Projects</h6>
									</div>
								</NavLink>
								<NavLink className="text-dark fw-bold text-decoration-none" to={'/showleave'}>
									<div className="option2 nav-option">
										<BiAnalyse className='fs-5' />
										<h6>Leave Report </h6>
									</div>
								</NavLink>
								<NavLink className="text-dark fw-bold text-decoration-none" to={'/task'}>
									<div className="option2 nav-option">
										<BiAnalyse className='fs-5' />
										<h6>Give Task </h6>
									</div>
								</NavLink>
								<NavLink className="text-dark fw-bold text-decoration-none" to={'/p'}>
									<div className="option2 nav-option">
										<FaRupeeSign className='fs-5' />
										<h6>Salary </h6>
									</div>
								</NavLink>

								<NavLink className="text-dark fw-bold text-decoration-none" to={'/ap'}>
									<div className="option2 nav-option">
										<FaFistRaised className='fs-5' />
										<h6>Attendence</h6>
									</div>
								</NavLink>
								<NavLink className="text-dark fw-bold text-decoration-none" to={'/psss'}>
									<div className="option2 nav-option">
										<FaAward className='fs-5' />
										<h6>Awards</h6>
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

export default Slidebar