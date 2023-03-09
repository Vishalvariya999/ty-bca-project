import React, { useEffect } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { acceptLeaveDetail, declineLeaveDetail, getLeave } from '../Redux/Action/Action'

const ShowManegerLeave = () => {
    const dispatch = useDispatch()
    const { leaveDetail, loading } = useSelector((stat) => stat.LoginEx)
    useEffect(() => {
        dispatch(getLeave())
    }, [])
    const ManegerLeave = leaveDetail?.filter((cur) => {
        return cur?.post === "MANAGER"
    })
    return (
        <>
            <div className="report-container">
                <div className="report-header">
                    <h1 className="recent-Articles">Leave Report List</h1>
                    {/* <button className="view">View All</button> */}
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

            {
                loading && <> <ThreeDots /> <h3>Loading Data...</h3> </>
            }
        </>
    )
}

export default ShowManegerLeave