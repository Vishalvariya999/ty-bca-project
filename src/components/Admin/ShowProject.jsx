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