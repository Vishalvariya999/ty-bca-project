import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { ThreeDots } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { acceptLeaveDetail, addManagerLeave, declineLeaveDetail, getLeave } from '../../Redux/Action/Action'
import FormInput from '../Common/FormInput'

const ShowManegerLeave = () => {
    const dispatch = useDispatch()
    const [hide, setHide] = useState(false)

    const handleClose = () => setHide(false);
    const handleShow = () => setHide(true)
    const { leaveDetail, loading } = useSelector((stat) => stat.LoginEx)
    useEffect(() => {
        dispatch(getLeave())
    }, [])
    const ManegerLeave = leaveDetail?.filter((cur) => {
        return cur?.post === "MANAGER"
    })
    const handleSubmit = () => {
        dispatch(addManagerLeave())
        handleClose()
    }
    return (
        <>
            <div className="report-container">
                <div className="report-header">
                    <h1 className="recent-Articles">Leave Report List</h1>
                    {/* <button className="view">View All</button> */}
                    <button className="view" onClick={handleShow}>Add Leave</button>
                </div>
                <div className="report-body">
                    <div className="table-responsive">
                        <table className='table table-bordered'>
                            <thead className='table table-primary'>
                                <tr>
                                    <th>Name</th>
                                    <th>Post</th>
                                    <th>Reason</th>
                                    <th>Start-Date</th>
                                    <th>End-Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    ManegerLeave?.map((data) => {
                                        return <tr key={data.id}>
                                            <td>{data.name}</td>
                                            <td>{data.post}</td>
                                            <td>{data.reason}</td>
                                            <td>{data.start_date}</td>
                                            <td>{data.end_date}</td>
                                            <td>{data.status}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <Modal show={hide} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>
                        <h3 className='text-success'>Add Leave</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="">
                        <div className='col-lg-12'>
                            <FormInput element="input" label="Name " type="text" nameclass="form-control" name="name" disabled={true} />
                        </div>
                        <div className='col-lg-12'>
                            <FormInput element="input" label="From date " type="date" nameclass="form-control" name="from_date" />
                        </div>
                        <div className='col-lg-12'>
                            <FormInput element="input" label="To date" type="date" nameclass="form-control" name="to_date" />
                        </div>
                        <div className='col-lg-12'>
                            <FormInput element="input" label="Reason : " type="text" nameclass="form-control" place="Enter Reason " name="reason" />
                        </div>
                        <div className='col-lg-12'>
                            <FormInput element="input" label="Description : " type="text" nameclass="form-control" place="Enter Description " name="discription" />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className='w-25' onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" className='w-25' onClick={handleSubmit}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>

            {
                loading && <> <ThreeDots /> <h3>Loading Data...</h3> </>
            }
        </>
    )
}

export default ShowManegerLeave