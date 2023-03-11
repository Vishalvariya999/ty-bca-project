import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProject } from '../../Redux/Action/Action'
import FormInput from '../Common/FormInput'

const AddProject = () => {
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addProject())
  }
  const { input } = useSelector((stat) => stat.LoginEx)
  return (
    <>
      <div className='container-fluid'>
        <div className='row mt-3'>
          <div className='col-lg-12 bg-light p-4 rounded'>
            <h2 className='h2 text-center text-primary fw-bold mb-4 mt-2 p-2'>Project Registration</h2>
            <form className='row g-3' action="">
              <div className='col-lg-6'>
                <FormInput element="input" label="Project Name : " type="text" nameclass="form-control" place="Enter Project Name " name="project_name" />
              </div>
              <div className='col-lg-6'>
                <FormInput element="input" label="Client Name : " type="text" nameclass="form-control" place="Enter Client Name " name="client_name" />
              </div>
              <div className='col-lg-6'>
                <FormInput element="input" label="From date " type="date" nameclass="form-control" name="from_date" />
              </div>
              <div className='col-lg-6'>
                <FormInput element="input" label="To date" type="date" nameclass="form-control" name="to_date" />
              </div>
              <div className='col-lg-12 mt-4'>
                <FormInput element="image" type="file" name="file" nameclass="form-control" />
              </div>
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

export default AddProject