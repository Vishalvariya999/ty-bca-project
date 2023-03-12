import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { BallTriangle, Bars, ThreeDots } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { deleteEmployee, editManeger, getEmployees, getSingleEmployee } from '../../Redux/Action/Action'

const ShowEmployee = () => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState("")
    const [searchVal, setSearchVal] = useState("")

    const [hide, setHide] = useState(false)

    const handleClose = () => setHide(false);
    const handleShow = () => setHide(true)

    const { getEmployee, loading, singleEmployee } = useSelector((stat) => stat.LoginEx)
    useEffect(() => {
        dispatch(getEmployees())
    }, [])
    const handleDelete = (id) => {
        dispatch(deleteEmployee(id))
    }
    // const handleEdit = (key) => {
    //     dispatch(dispatch(editManeger(key)))
    // }
    const handleView = (key) => {
        handleShow()
        dispatch(dispatch(getSingleEmployee(key)))
    }
    const searchData = (e) => {
        setSearch(e.target.value)
        const val = getEmployee.filter((c) => {
            if (c?.name?.toLowerCase().includes(e.target.value.toLowerCase())) {
                return c
            }
        })
        setSearchVal(val)
    }
    const searchingData = search?.length ? searchVal : getEmployee
    return (
        <>
            <div className="report-container">
                <div className="report-header">
                    <h1 className="recent-Articles">Employes List</h1>
                    <div className='d-flex flex-row '>
                        <div className='col-lg-10 mx-1'>
                            <input type="text" className='form-control form-control-md' placeholder='Search' value={search} onChange={searchData} />
                        </div>
                        <div>
                            <button id="search-button" type="button" class="btn btn-md btn-primary">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="report-body">
                    <div className="table-responsive rounded">
                        <table className='table table-bordered '>
                            <thead className='table table-primary'>
                                <tr>
                                    <th>Name</th>
                                    <th>E-mail</th>
                                    <th>Mobile</th>
                                    <th>Address</th>
                                    <th>BirthDate</th>
                                    <th>Status</th>
                                    <th>Role</th>
                                    <th>Modify</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    searchingData.length ? searchingData.map((data) => {
                                        return <tr key={data.id}>
                                            <td>{data.name}</td>
                                            <td>{data.email}</td>
                                            <td>{data.mobile}</td>
                                            <td>{data.address}</td>
                                            <td>{data.birth_date}</td>
                                            <td>{data.status}</td>
                                            <td>{data.role}</td>
                                            <td>
                                                <button className='btn btn-primary mx-2' onClick={() => handleView(data?.id)}>
                                                    <i class="fa-solid fa-eye"></i>
                                                </button>
                                                {console.log('data?.email', data?.email)}
                                                <button className='btn btn-danger mx-2' onClick={() => handleDelete(data?.id)}>
                                                    <i class="fa-solid fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    })
                                        :
                                        <tr>
                                            <td className='text-center text-danger fw-bold' colSpan={8}>
                                                Data Not Found
                                            </td>
                                        </tr>
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
                                            <h3 className='mx-5 my-4 text-success'>View Employee</h3>
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
                                        {singleEmployee?.name}
                                    </div>
                                    <hr className='mt-3' />
                                    <div className="col-md-6">
                                        Email
                                    </div>
                                    <div className="col-md-6">
                                        {singleEmployee?.email}
                                    </div>
                                    <hr className='mt-3' />
                                    <div className="col-md-6">
                                        Mobile
                                    </div>
                                    <div className="col-md-6">
                                        {singleEmployee?.mobile}
                                    </div>
                                    <hr className='mt-3' />
                                    <div className="col-md-6">
                                        Address
                                    </div>
                                    <div className="col-md-6">
                                        {singleEmployee?.address}
                                    </div>
                                    <hr className='mt-3' />
                                    <div className="col-md-6">
                                        Birth Date
                                    </div>
                                    <div className="col-md-6">
                                        {singleEmployee?.birth_date}
                                    </div>
                                    <hr className='mt-3' />
                                    <div className="col-md-6">
                                        Status
                                    </div>
                                    <div className="col-md-6">
                                        {singleEmployee?.status}
                                    </div>
                                    <hr className='mt-3' />
                                    <div className="col-md-6">
                                        Role
                                    </div>
                                    <div className="col-md-6">
                                        {singleEmployee?.role}
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
                loading && <> <ThreeDots /> <h3>Loading Data...</h3> </>
            }
        </>
    )
}

export default ShowEmployee