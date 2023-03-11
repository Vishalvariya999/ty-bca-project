import React, { useEffect } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { getProjectDetail } from '../../Redux/Action/Action'

const ShowProjectDetail = () => {
    const dispatch = useDispatch()
    const { projectDetail, loading } = useSelector((stat) => stat.LoginEx)
    useEffect(() => {
        dispatch(getProjectDetail())
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
                        <table className='table  table-bordered'>
                            <thead className='table table-primary'>
                                <tr>
                                    <th>ID</th>
                                    <th>Project Name</th>
                                    <th>Client Name</th>
                                    <th>From-Date</th>
                                    <th>To-Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    projectDetail?.map((data) => {
                                        return <tr key={data.id}>
                                            <td>{data?.id}</td>
                                            <td>{data.project_name}</td>
                                            <td>{data.client_name}</td>
                                            <td>{data.from_date}</td>
                                            <td>{data.to_date}</td>
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

export default ShowProjectDetail