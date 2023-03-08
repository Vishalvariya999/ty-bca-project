import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addHr } from '../Redux/Action/Action'
import FormInput from './FormInput'

const AddHR = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    dispatch(addHr())
  }
  return (
    <>
      <div className='container-fluid'>
        <div className='row mt-3'>
          <div className='col-lg-12 bg-light p-4 rounded'>
            <h2 className='h2 text-center text-primary fw-bold mb-4 mt-2 p-2'>HR Registration</h2>
            <form className='row g-3' action="">
              <div className='col-lg-12'>
                <FormInput element="input" label="Name : " type="text" nameclass="form-control" place="Enter Name " name="name" />
              </div>

              <div className='col-lg-6'>
                <FormInput element="input" label="Email " type="email" nameclass="form-control" place="Enter Email Address " name="email" />
              </div>
              <div className='col-lg-6'>
                <FormInput element="input" label="Phone" type="text" nameclass="form-control" place="Enter Phone Number " name="mobile" />
              </div>
              <div className='col-lg-12'>
                <FormInput element="input" label="Address : " type="text" nameclass="form-control" place="Enter Your Address " name="address" />
              </div>

              <div className='col-lg-6'>
                <FormInput element="input" label="Date" type="date" nameclass="form-control" name="birth_date" />
              </div>
              <div className='col-lg-6'>
                <FormInput element="input" label="Password" type="password" nameclass="form-control" name="password" place="Enter Your Password" />
              </div>
              <div className='col-lg-12 text-center'>
                <button type='button' className='btn btn-md btn-primary mt-3' onClick={() => handleSubmit()}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddHR   