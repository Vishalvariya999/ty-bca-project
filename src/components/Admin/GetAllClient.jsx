import React, { useEffect } from 'react'
import { BallTriangle } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { deleteClient, getClient } from '../../Redux/Action/Action'

const GetAllClient = () => {
    const dispatch = useDispatch()
    const { getClent, loading, } = useSelector((stat) => stat.LoginEx)
    useEffect(() => {
        dispatch(getClient())
    }, [])
    const handleDelete = (id) => {
        dispatch(deleteClient(id))
    }
    return (
        <>
            <div className="report-container">
                <div className="report-header">
                    <h1 className="recent-Articles">Clients List</h1>
                    <div className='d-flex flex-row '>
                        <div className='col-lg-10 mx-1'>
                            <input type="text" className='form-control form-control-md' placeholder='Search' />
                        </div>
                        <div>
                            <button id="search-button" type="button" class="btn btn-md btn-primary">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
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
                                    <th>Status</th>
                                    <th>Modify</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    getClent?.map((data) => {
                                        return <tr key={data.id}>
                                            <td>{data.client_name}</td>
                                            <td>{data.client_email}</td>
                                            <td>{data.client_mobile}</td>
                                            <td>{data.client_address}</td>
                                            <td>{data.status}</td>
                                            <td>
                                                <button className='btn btn-danger mx-2' onClick={() => handleDelete(data?.id)}>
                                                    <i class="fa-solid fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {
                loading && <> <BallTriangle /> <h1>Loading Data...</h1> </>
            }
        </>
    )
}

export default GetAllClient
