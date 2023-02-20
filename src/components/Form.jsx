import React from 'react'
import FormInput from './FormInput'

const Form = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row mt-3'>
          <div className='col-lg-12 bg-light p-4 rounded'>
            <h2 className='h2 text-center text-primary fw-bold mb-4 mt-2 p-2'>Employee Registration</h2>
            <form className='row g-3' action="">
              <div className='col-lg-12'>
                <FormInput element="input" label="Name : " type="text" nameclass="form-control" place="Enter Name " name="name"/>
              </div>
              <div className='col-lg-12'>
                <label htmlFor="" className='form-label'>Gender :</label>
                <div className="form-check form-check-inline mx-2">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                  <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                </div>
                <div class="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <label classNam="form-check-label" htmlFor="inlineRadio2">Female</label>
                </div>
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
               <FormInput element="select" label="Role" nameclass="form-select" op={["Select-Role", "Maneger", "Employee"]}/>
              </div>
              <div className='col-lg-6'>
              <FormInput element="input" label="Date" type="date" nameclass="form-control"  name="date"/>
              </div>
              <div className='col-lg-6'>
              <FormInput element="input" label="Salary" type="text" nameclass="form-control"  name="salary" place="Enter Salary"/>
              </div>
              <div className='col-lg-6'>
              <FormInput element="input" label="Langauges" type="text" nameclass="form-control"  name="langauge" place="Enter Langauges"/>
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

export default Form