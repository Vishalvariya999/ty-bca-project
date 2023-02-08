import React from 'react'
import { Form } from 'react-bootstrap'

const Login = () => {
  return (
   <>
    <div className="main-div-login">
     <div className='container login-con'>
        <div className='row'>
          <div className='col-lg-6'>
            <img src="./images/1.jpg" className='d-block w-101 h-100' alt="" />
          </div>
          <div className='col-lg-6 bg-light secdiv'>
            <div className='my-auto'>
              <div>
                <h2 className='h2 text-center form-heading'>Welcome To Dreams</h2>
              </div>
              <form className='' action="">
                <Form.Group className='mb-4 w-75 mx-auto '>
                  <Form.Label>E-mail </Form.Label>
                  <input className='form-input' type='email' placeholder='Enter Email Address'></input>
                </Form.Group>
                <Form.Group className='w-75 mx-auto'>
                  <Form.Label>Paassword </Form.Label>
                  <input className='form-input' type='password' placeholder='Enter Password'></input>
                </Form.Group>
                <Form.Group className='forgot-password'>
                  <a href="#" className='form-forget'>Forget Password ?</a>
                </Form.Group>
                <Form.Group className='btnLogin d-flex justify-content-center'>
                  <button type='button' className="btn btn-md  w-25 btnLog">Login</button>
                </Form.Group>
              </form>
            </div>
          </div>
        </div>
      </div>
     </div>
   </>
  )
}

export default Login