import React from 'react'
import { useDispatch } from 'react-redux'
import { giveTask } from '../Redux/Action/Action'
import FormInput from './FormInput'

const GiveTask = () => {
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        dispatch(giveTask())
    }
    return (
        <>
            <div className='container-fluid'>
                <div className='row mt-3'>
                    <div className='col-lg-12 bg-light p-4 rounded'>
                        <h2 className='h2 text-center text-primary fw-bold mb-4 mt-2 p-2'>Give Task</h2>
                        <form className='row g-3' action="">
                            <div className='col-lg-6'>
                                <FormInput element="input" label="Name : " type="text" nameclass="form-control" place="Enter Name " name="name" />
                            </div>
                            <div className='col-lg-6'>
                                <FormInput element="input" label="Discription : " type="text" nameclass="form-control" place="Enter Discription " name="description" />
                            </div>
                            <div className='col-lg-6'>
                                <FormInput element="input" label="From date " type="date" nameclass="form-control" name="from_date" />
                            </div>
                            <div className='col-lg-6'>
                                <FormInput element="input" label="To date" type="date" nameclass="form-control" name="to_date" />
                            </div>
                            <div className='col-lg-12 mt-4'>
                                <FormInput element="select" label="Role : " type="select" name="role" op={["Select", "MANAGER", "HR", "EMPLOYEE"]} nameclass="form-control" />
                            </div>
                            <div className='col-lg-12 mt-4'>
                                <FormInput element="input" label="Title : " type="text" name="title" place="Enter Title" nameclass="form-control" />
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

export default GiveTask