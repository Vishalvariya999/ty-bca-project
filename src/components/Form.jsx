import React from 'react'

const Form = () => {
  return (
    <>
        <div className='container-fluid'>
        <div className='row mt-3'>
          <div className='col-lg-6  rounded-start'>
            <img src="./images/formSideImg.jpg" className='d-block h-100 w-100' alt="img" />
          </div>
          <div className='col-lg-6 bg-light p-4 rounded-end '>
            <h1 className='h1 text-primary fw-bold mb-2 mt-2 p-2'>Registration Form</h1>
            <form className='row g-3' action="">
              <div className='col-lg-4'>
                <label htmlFor="" className='form-label'>First Name</label>
                <input className='form-control' type="text" placeholder='Enter Your First Name' name="" id="" />
              </div>
              <div className='col-lg-4'>
                <label htmlFor="" className='form-label'>Middle Name</label>
                <input className='form-control' type="text" placeholder='Enter Your Middle Name' name="" id="" />
              </div>
              <div className='col-lg-4'>
                <label htmlFor="" className='form-label'>Last Name</label>
                <input className='form-control' type="text" placeholder='Enter Your Last Name' name="" id="" />
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
                <label htmlFor="" className='form-label'>E-mail</label>
                <input className='form-control' type="email" placeholder='Enter Your E-mail Address' name="" id="" />
              </div>
              <div className='col-lg-6'>
                <label htmlFor="" className='form-label'>Phone</label>
                <input className='form-control' type="text" placeholder='Enter Your Phone Number' name="" id="" />
              </div>
              <div className='col-lg-6'>
                <label htmlFor="" className='form-label'>Date of Birth</label>
                <input type="date" className='form-control' name="" id="" />
              </div>
              <div className='col-lg-6'>
                <label htmlFor="" className='form-label'>Role</label>
                <select className='form-select ' name="" id="">
                  <option selected value="">Select Role</option>
                  <option value="">HR</option>
                  <option value="">Manager</option>
                  <option value="">Employee</option>
                </select>
              </div>
              <div className='col-lg-12'>
                <label htmlFor="" className='form-label'>Language :</label>
                <div class="form-check form-check-inline mx-2">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">React js</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                  <label className="form-check-label" htmlFor="inlineCheckbox2">Angular js</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                  <label className="form-check-label" htmlFor="inlineCheckbox3">Nodejs</label>
                </div>
              </div>
              <div className='col-lg-4'>
                <label htmlFor="" className='form-label'>Country</label>
                <select className='form-select ' name="" id="">
                  <option selected value="">Select Country</option>
                  <option value="">India</option>
                  <option value="">America</option>
                </select>
              </div>
              <div className='col-lg-4'>
                <label htmlFor="" className='form-label'>State</label>
                <select className='form-select ' name="" id="">
                  <option selected value="">Select State</option>
                  <option value="">Gujarat</option>
                  <option value="">Rajashthan</option>
                </select>
              </div>
              <div className='col-lg-4'>
                <label htmlFor="" className='form-label'>City</label>
                <select className='form-select ' name="" id="">
                  <option selected value="">Select City</option>
                  <option value="">Surat</option>
                  <option value="">Mumbai</option>
                </select>
              </div>
              <div className='col-lg-12'>
                <button type='button' className='btn btn-lg btn-primary w-25'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form