import React, { useEffect } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { getHrDetail } from '../Redux/Action/Action'

const ShowHrDetail = () => {
    const dispatch = useDispatch()
    const { hrDetail, loading } = useSelector((stat) => stat.LoginEx)
    useEffect(() => {
        dispatch(getHrDetail())
    }, [])
    return (
        <>
            <div className="report-container">
                <div className="report-header">
                    <h1 className="recent-Articles">HR List</h1>
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
                                    <th>BirthDate</th>
                                    <th>Status</th>
                                    <th>Role</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    hrDetail?.map((data) => {
                                        return <tr key={data.id}>
                                            <td>{data.name}</td>
                                            <td>{data.email}</td>
                                            <td>{data.mobile}</td>
                                            <td>{data.address}</td>
                                            <td>{data.birth_date}</td>
                                            <td>{data.status}</td>
                                            <td>{data.role}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {
                loading && <> <ThreeDots /> <h3>Loading Data...</h3> </>
            }
        </>
    )
}

export default ShowHrDetail