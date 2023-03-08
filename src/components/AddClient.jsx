import React from 'react'
import { useDispatch } from 'react-redux'
import { addClient } from '../Redux/Action/Action'
import FormInput from './FormInput'

const AddClient = () => {
  const dispatch = useDispatch()
  const handleSubmit = () => {
    dispatch(addClient())
  }
  return (
    <>
        <div className='container-fluid'>
        <div className='row mt-3'>
          <div className='col-lg-12 bg-light p-4 rounded'>
            <h2 className='h2 text-center text-primary fw-bold mb-4 mt-2 p-2'>Client Registration</h2>
            <form className='row g-3' action="">
              <div className='col-lg-12'>
                <FormInput element="input" label="Name : " type="text" nameclass="form-control" place="Enter Name " name="name"/>
              </div>
              
              <div className='col-lg-6'>
              <FormInput element="input" label="Email " type="email" nameclass="form-control" place="Enter Email Address " name="email"/>
              </div>
              <div className='col-lg-6'>
              <FormInput element="input" label="Phone" type="text" nameclass="form-control" place="Enter Phone Number " name="mobile"/>
              </div>
              <div className='col-lg-12'>
              <FormInput element="input" label="Address : " type="text" nameclass="form-control" place="Enter Your Address " name="address"/>
              </div>
                {/* <FormInput element="image" type="file" name="file" nameclass="form-control"/> */}
              <div className='col-lg-12 text-center'>
                <button type='button' className='btn btn-md btn-primary mt-3' onClick={handleSubmit} >Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddClient