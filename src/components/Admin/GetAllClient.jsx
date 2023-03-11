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
