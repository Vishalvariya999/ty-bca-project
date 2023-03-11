import React, { useEffect, useState } from 'react'
import { BallTriangle } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { deleteManeger, editManeger, getManegers, getSingleManeger } from '../../Redux/Action/Action'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import { Button, Form, Modal } from 'react-bootstrap'

const ShowManeger = () => {
    const dispatch = useDispatch()
    const [hide, setHide] = useState(false)

    const handleClose = () => setHide(false);
    const handleShow = () => setHide(true);
    const { getManeger, loading, singleUser } = useSelector((stat) => stat.LoginEx)
    // console.log('single', singleUser)
    useEffect(() => {
        dispatch(getManegers())
    }, [])
    const handleDelete = (id) => {
        dispatch(deleteManeger(id))
    }
    // const handleEdit = (key) => {
    //     dispatch(dispatch(getSingleManeger(key)))
    // }
    const handleView = (key) => {
        handleShow()
        dispatch(dispatch(getSingleManeger(key)))
    }
    return (
        <>
            <div className="report-container">
                <div className="report-header">
                    <h1 className="recent-Articles">Manager List</h1>
                    {/* <button className="view">View All</button> */}
                </div>
                <div className="report-body">
                    <div className="table-responsive">
                        <table className='table  table-bordered'>
                            <thead className='table table-primary'>
                                <tr>
                                    <th>Name</th>
                                    <th>E-mail</th>
                                    <th>Mobile</th>
                                    <th>Address</th>
                                    <th>Birth Date</th>
                                    {/* <th>Date of Joining</th> */}
                                    <th>Status</th>
                                    <th>Role</th>
                                    <th>Modify</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    getManeger && getManeger?.map((data) => {
                                        return <tr key={data.id}>
                                            <td>{data.name}</td>
                                            <td>{data.email}</td>
                                            <td>{data.mobile}</td>
                                            <td>{data.address}</td>
                                            <td>{data.birth_date}</td>
                                            {/* <td>{data.date_of_joining}</td> */}
                                            <td>{data.status}</td>
                                            <td>{data.role}</td>
                                            <td>
                                                <button className='btn btn-primary mx-2' onClick={() => handleView(data?.id)}>
                                                    <i class="fa-solid fa-eye"></i>
                                                </button>
                                                {/* <button className='btn btn-success mx-2' onClick={() => handleEdit(data?.email)}>Edit</button> */}
                                                <button className='btn btn-danger mx-2' onClick={() => handleDelete(data?.id)}>
                                                    <i class="fa-solid fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                        <Modal show={hide} onHide={handleClose}>
                            <Modal.Header >
                                <Modal.Title>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <img src="/images/profile.jpeg" alt="profile" className='' style={{ height: "100px", width: "100px" }} />
                                        </div>
                                        <div>
                                            <h3 className='mx-5 my-4 text-success'>View Maneger</h3>
                                        </div>
                                    </div>

                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="row">
                                    <div className="col-md-6">
                                        Name
                                    </div>
                                    <div className="col-md-6">
                                        {singleUser?.name}
                                    </div>
                                    <hr className='mt-3' />
                                    <div className="col-md-6">
                                        Email
                                    </div>
                                    <div className="col-md-6">
                                        {singleUser?.email}
                                    </div>
                                    <hr className='mt-3' />
                                    <div className="col-md-6">
                                        Mobile
                                    </div>
                                    <div className="col-md-6">
                                        {singleUser?.mobile}
                                    </div>
                                    <hr className='mt-3' />
                                    <div className="col-md-6">
                                        Address
                                    </div>
                                    <div className="col-md-6">
                                        {singleUser?.address}
                                    </div>
                                    <hr className='mt-3' />
                                    <div className="col-md-6">
                                        Birth Date
                                    </div>
                                    <div className="col-md-6">
                                        {singleUser?.birth_date}
                                    </div>
                                    <hr className='mt-3' />
                                    <div className="col-md-6">
                                        Status
                                    </div>
                                    <div className="col-md-6">
                                        {singleUser?.status}
                                    </div>
                                    <hr className='mt-3' />
                                    <div className="col-md-6">
                                        Role
                                    </div>
                                    <div className="col-md-6">
                                        {singleUser?.role}
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>

            {
                loading && <> <BallTriangle /> <h1>Loading Data...</h1> </>
            }
        </>
    )
}

export default ShowManeger