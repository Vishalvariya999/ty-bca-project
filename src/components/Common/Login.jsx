import React from 'react'
import '../../css/login.css'
import { LoginData, InputData } from '../../Redux/Action/Action'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { input } = useSelector((stat) => stat.LoginEx)
    const handleClick = (e) => {
        e.preventDefault()
        dispatch(LoginData(input.email, input.password, navigate))
    }
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        dispatch(InputData(name, value))
    }
    return (
        <>
            <div className="wrapper">
                <div className="logo">
                    <img src="./images/logo.jpg" alt="" />
                </div>
                <div className="text-center mt-4 name">
                    Dreams Infotech
                </div>
                <form className="p-3 mt-3">
                    <div className="form-field d-flex align-items-center">
                        <span className="far fa-user"></span>
                        <input type="text" value={input.email} onChange={handleChange} name="email" id="userName" placeholder="Email Address" />
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-key"></span>
                        <input type="password" value={input.password} onChange={handleChange} name="password" id="pwd" placeholder="Password" />
                    </div>
                    <button className="btn mt-3" onClick={handleClick}>Login</button>
                </form>
                <div className="text-center fs-6">
                    <a href="#">Forget password?</a>
                </div>
            </div>
        </>
    )
}

export default Login