import React, { useEffect } from 'react'
import { BallTriangle, Bars, ThreeDots } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { getEmployees } from '../Redux/Action/Action'

const ShowEmployee = () => {
    const dispatch = useDispatch()
    const {getEmployee, loading,singleUser} = useSelector((stat) => stat.LoginEx)
    useEffect(() => {
        dispatch(getEmployees())
    },[])
    // const handleDelete = (id) => {
    //     dispatch(deleteManeger(id))
    // }
    // const handleEdit = (key) => {
    //     dispatch(dispatch(editManeger(key)))
    // }
  return (
    <>
      <div className="table-responsive">
        <table className='table table-striped table-border'>
            <thead className='table table-dark'>
                <tr>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Mobile</th>
                    <th>Address</th>
                    <th>BirthDate</th>
                    <th>Status</th>
                    <th>Role</th>
                    <th>Modify</th>
                </tr>
            </thead>
            <tbody>
                {
                    getEmployee.map((data)=>{
                        return<tr key={data.id}>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.mobile}</td>
                            <td>{data.address}</td>
                            <td>{data.birth_date}</td>
                            <td>{data.status}</td>
                            <td>{data.role}</td>    
                            {/* <td> <FiEdit className='fs-3 text-success' onClick={() => handleEdit(data?.email)}/> */}
                            {/* <FiTrash2 className='fs-3 text-danger mx-2 cursur-pointer' onClick={() => handleDelete(data?.id)}/> */}
                            {/* <button className='btn btn-danger mx-2' onClick={() => handleDelete(data?.id)}>Delete</button>
                            </td> */}
                        </tr>
                    })
                }
            </tbody>
        </table>
        </div>
        {
            loading && <> <ThreeDots /> <h3>Loading Data...</h3> </>
        }
    </>
  )
}

export default ShowEmployee