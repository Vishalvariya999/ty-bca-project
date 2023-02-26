import React from 'react'
import FormInput from './FormInput'

const AddClient = () => {
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
              <FormInput element="input" label="Phone" type="text" nameclass="form-control" place="Enter Phone Number " name="phno"/>
              </div>
              <div className='col-lg-12'>
              <FormInput element="input" label="Address : " type="text" nameclass="form-control" place="Enter Your Address " name="address"/>
              </div>
              <div className='col-lg-6'>
              <FormInput element="input" label="City : " type="text" nameclass="form-control" place="Enter Your City " name="city"/>
              </div>
              <div className='col-lg-6'>
              <FormInput element="input" label="Pincode : " type="text" nameclass="form-control" place="Enter Your Pincode " name="pincode"/>
              </div> 
              <div className='col-lg-12 text-center'>
                <button type='button' className='btn btn-md btn-primary mt-3'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddClient