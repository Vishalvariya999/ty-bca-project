import React from 'react'
import '../css/login.css'

const Login = () => {
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
                <input type="text" name="userName" id="userName" placeholder="Email Address" />
            </div>
            <div className="form-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password" />
            </div>
            <button className="btn mt-3">Login</button>
        </form>
        <div className="text-center fs-6">
            <a href="#">Forget password?</a>
        </div>
    </div>
   </>
  )
}

export default Login