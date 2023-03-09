import React, { useEffect } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { acceptLeaveDetail, declineLeaveDetail, getLeave } from '../Redux/Action/Action'

const ShowLeave = () => {
    const dispatch = useDispatch()
    const { leaveDetail, loading } = useSelector((stat) => stat.LoginEx)
    useEffect(() => {
        dispatch(getLeave())
    }, [])
    const acceptLeave = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Approved it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(acceptLeaveDetail(id))
                Swal.fire(
                    'Approved!',
                    'Your Leave has been Approoved.',
                    'success'
                )
            }
        })
    }
    const declineLeave = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Decline it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(declineLeaveDetail(id))
                Swal.fire(
                    'Decline!',
                    'Your Leave has been Decline.',
                    'success'
                )
            }
        })
    }
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
                                    <th>Description</th>
                                    <th>Start-Date</th>
                                    <th>End-Date</th>
                                    <th>Status</th>
                                    <th>Give Leave</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    leaveDetail?.map((data) => {
                                        return <tr key={data.id}>
                                            <td>{data.name}</td>
                                            <td>{data.post}</td>
                                            <td>{data.reason}</td>
                                            <td>{data?.description}</td>
                                            <td>{data.start_date}</td>
                                            <td>{data.end_date}</td>
                                            <td >{data.status}</td>
                                            <td>
                                                <button className='btn btn-success mx-3' onClick={() => acceptLeave(data?.id)}>
                                                    <i class="fa-solid fa-check"></i>
                                                </button>
                                                <button className='btn   btn-danger' onClick={() => declineLeave(data?.id)}>
                                                    <i class="fa-solid fa-xmark"></i>
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
                loading && <> <ThreeDots /> <h3>Loading Data...</h3> </>
            }
        </>
    )
}

export default ShowLeave