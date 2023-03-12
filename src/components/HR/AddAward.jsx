import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { ThreeDots } from 'react-loader-spinner'
import { useSelector } from 'react-redux'
import FormInput from '../Common/FormInput'

const AddAward = () => {

    const [hide, setHide] = useState(false)

    const handleClose = () => setHide(false);
    const handleShow = () => setHide(true)
    const { leaveDetail, loading } = useSelector((stat) => stat.LoginEx)
    return (
        <>
            <div className="report-container">
                <div className="report-header">
                    <h1 className="recent-Articles">Award List</h1>
                    <button className="view" onClick={handleShow}>Add Award</button>
                </div>
                <div className="report-body">
                    <div className="table-responsive">
                        <table className='table table-bordered'>
                            <thead className='table table-primary'>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Award Name</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Modal show={hide} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>
                        <h3 className='text-success'>Add Award</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="">
                        <div className='col-lg-12'>
                            <FormInput element="input" label="Employee Name " type="text" nameclass="form-control" name="name" place="Enter Employee Name" />
                        </div>
                        <div className='col-lg-12'>
                            <FormInput element="input" label="Description : " type="text" nameclass="form-control" place="Enter Description " name="discription" />
                        </div>
                        <div className='col-lg-12'>
                            <FormInput element="input" label="Award Name" type="text" nameclass="form-control" name="award" place="Enter Award Name" />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className='w-25' onClick={handleClose}>
                        Close
                    </Button>
                    {/* <Button variant="primary" className='w-25' onClick={handleSubmit}>
                        Save
                    </Button> */}
                </Modal.Footer>
            </Modal>
            {/* {
                loading && <> <ThreeDots /> <h3>Loading Data...</h3> </>
            } */}
        </>
    )
}

export default AddAward