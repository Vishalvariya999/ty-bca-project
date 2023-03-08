import React, { useEffect } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { getProject } from '../Redux/Action/Action'

const ProjectDetail = () => {
    const dispatch = useDispatch()
    const { getProjects, loading } = useSelector((stat) => stat.LoginEx)
    useEffect(() => {
        dispatch(getProject())
    }, [])
    return (
        <>
            <div className="report-container">
                <div className="report-header">
                    <h1 className="recent-Articles">Project List</h1>
                    {/* <button className="view">View All</button> */}
                </div>
                <div className="report-body">
                    <div className="table-responsive">
                        <table className='table table-bordered'>
                            <thead className='table table-primary'>
                                <tr>
                                    <th>ID</th>
                                    <th>Project Name</th>
                                    <th>Client Name</th>
                                    <th>From-Date</th>
                                    <th>To-Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    getProjects.map((data) => {
                                        return <tr key={data.id}>
                                            <td>{data?.id}</td>
                                            <td>{data.project_name}</td>
                                            <td>{data.client_name}</td>
                                            <td>{data.from_date}</td>
                                            <td>{data.to_date}</td>
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

export default ProjectDetail
