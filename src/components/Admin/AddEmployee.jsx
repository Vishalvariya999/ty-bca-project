import React from 'react'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../../Redux/Action/Action'
import FormInput from '../Common/FormInput'

const Form = () => {
  const dispatch = useDispatch()
  const handleClick = (e) => {
    e.preventDefault()
    dispatch(addEmployee())
  }
  return (
    <>
      <div className='container-fluid'>
        <div className='row mt-3'>
          <div className='col-lg-12 bg-light p-4 rounded'>
            <h2 className='h2 text-center text-primary fw-bold mb-4 mt-2 p-2'>Employee Registration</h2>
            <form className='row g-3' action="">
              <div className='col-lg-12'>
                <FormInput element="input" label="Name : " type="text" nameclass="form-control" place="Enter Name " name="name" />
              </div>
              {/* <div className='col-lg-12'>      */}
              <div className='col-lg-12'>
                <FormInput element="select" name="gender" label="Gender" nameclass="form-select" op={["Select-Gender", "Male", "Female"]} />
              </div>
              {/* </div> */}
              <div className='col-lg-6'>
                <FormInput element="input" label="Email " type="email" nameclass="form-control" place="Enter Email Address " name="email" />
              </div>
              <div className='col-lg-6'>
                <FormInput element="input" label="Password" type="password" nameclass="form-control" name="password" place="Enter Password" />
              </div>
              <div className='col-lg-6'>
                <FormInput element="input" label="Phone" type="text" nameclass="form-control" place="Enter Phone Number " name="mobile" />
              </div>
              <div className='col-lg-12'>
                <FormInput element="input" label="Address : " type="text" nameclass="form-control" place="Enter Your Address " name="address" />
              </div>
              <div className='col-lg-6'>
                <FormInput element="select" name="role" label="Role" nameclass="form-select" op={["Select-Role", "Maneger", "Employee"]} />
              </div>
              <div className='col-lg-6'>
                <FormInput element="input" label="Date" type="date" nameclass="form-control" name="birth_date" />
              </div>
              <div className='col-lg-6'>
                <FormInput element="input" label="Salary" type="text" nameclass="form-control" name="salary" place="Enter Salary" />
              </div>
              <div className='col-lg-6'>
                <FormInput element="input" label="Langauges" type="text" nameclass="form-control" name="langauge" place="Enter Langauges" />
              </div>


              <div className='col-lg-12 text-center'>
                <button type='button' className='btn btn-md btn-primary mt-3' onClick={handleClick}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form