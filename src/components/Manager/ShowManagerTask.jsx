import React, { useEffect } from 'react'
import { BallTriangle, ThreeDots } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { complateTaskDetail, getHrDetail, getManagerTask, getManegers, inProgressDetail } from '../../Redux/Action/Action'

const ShowManagerTask = () => {
    const dispatch = useDispatch()
    const login = localStorage.getItem("loginname")
    const { managerTask, loading, getManeger, hrDetail, singleEmployee } = useSelector
        ((stat) => stat.LoginEx)
    useEffect(() => {
        dispatch(getManagerTask())
    }, [])
    const progress = (data) => {
        dispatch(inProgressDetail(data))
    }
    const complated = (data) => {
        dispatch(complateTaskDetail(data))
    }
    useEffect(() => {
        dispatch(getHrDetail())
        dispatch(getManegers())

    }, [])
    const data = managerTask?.filter((c) => c?.name === login)
    return (
        <>
            <div className="report-container">
                <div className="report-header">
                    <h1 className="recent-Articles">Task List</h1>
                    {/* <button className="view">View All</button> */}
                </div>
                <div className="report-body">
                    <div className="table-responsive">
                        <table className='table  table-bordered'>
                            <thead className='table table-primary'>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>From-Date</th>
                                    <th>To-Date</th>
                                    <th>Title</th>
                                    <th>Status</th>
                                    <th>Modify</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data?.map((data) => {
                                        return <tr key={data.id}>
                                            <td>{data?.id}</td>
                                            <td>{data.name}</td>
                                            <td>{data.description}</td>
                                            <td>{data.fromDate}</td>
                                            <td>{data.toDate}</td>
                                            <td>{data?.title}</td>
                                            <td>{data?.status}</td>
                                            <td>
                                                <button className='btn btn-success mx-3' onClick={() => progress(data?.id)}>
                                                    <i class="fa-solid fa-check"></i>
                                                </button>
                                                <button className='btn   btn-danger' onClick={() => complated(data?.id)}>
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

export default ShowManagerTask