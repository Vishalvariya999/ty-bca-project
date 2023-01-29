import React from 'react'
import { Form } from 'react-bootstrap'
import "./App.css"

const App = () => {
  return (
    <>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-lg-6'>
            <img src="../images/456.jpg" className='d-block w-100 ' alt="" />
          </div>
          <div className='col-lg-6 bg-white'>
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
                  <button type='button' className="btn btn-md btn-secondary w-25 rounded">Login</button>
                </Form.Group>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App