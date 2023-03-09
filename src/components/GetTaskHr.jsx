import React, { useEffect } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { getTaskHr } from '../Redux/Action/Action'

const GetTaskHr = () => {
    const dispatch = useDispatch()
    const { taskDetail, loading } = useSelector((stat) => stat.LoginEx)
    useEffect(() => {
        dispatch(getTaskHr())
    }, [])
    console.log('taskDetail', taskDetail)
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
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    taskDetail?.map((data) => {
                                        return <tr key={data.id}>
                                            <td>{data?.id}</td>
                                            <td>{data.name}</td>
                                            <td>{data.description}</td>
                                            <td>{data.fromDate}</td>
                                            <td>{data.toDate}</td>
                                            <td>{data?.title}</td>
                                            <td>{data?.status}</td>
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

export default GetTaskHr