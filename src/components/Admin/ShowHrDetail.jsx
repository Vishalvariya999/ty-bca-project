import React, { useEffect, useState } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { deletehr, getHrDetail } from '../../Redux/Action/Action'

const ShowHrDetail = () => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState("")
    const [searchVal, setSearchVal] = useState("")
    const { hrDetail, loading } = useSelector((stat) => stat.LoginEx)
    useEffect(() => {
        dispatch(getHrDetail())
    }, [])
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(dispatch(deletehr(id)))
                Swal.fire(
                    'Decline!',
                    'Your Data has been Deleted.',
                    'success'
                )
            }
        })

    }
    const searchData = (e) => {
        setSearch(e.target.value)
        const val = hrDetail.filter((c) => {
            if (c?.name?.toLowerCase().trim().includes(e.target.value.trim().toLowerCase())) {
                return c
            }
        })
        setSearchVal(val)
    }
    const searchingData = search?.length ? searchVal : hrDetail
    return (
        <>
            <div className="report-container">
                <div className="report-header">
                    <h1 className="recent-Articles">HR List</h1>
                    <div className='d-flex flex-row '>
                        <div className='col-lg-10 mx-1'>
                            <input type="text" className='form-control form-control-md' placeholder='Search' value={search} onChange={searchData} />
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
                                    <th>Name</th>
                                    <th>E-mail</th>
                                    <th>Mobile</th>
                                    <th>Address</th>
                                    <th>BirthDate</th>
                                    <th>Status</th>
                                    <th>Role</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    searchingData.length ? searchingData?.map((data) => {
                                        return <tr key={data.id}>
                                            <td>{data.name}</td>
                                            <td>{data.email}</td>
                                            <td>{data.mobile}</td>
                                            <td>{data.address}</td>
                                            <td>{data.birth_date}</td>
                                            <td>{data.status}</td>
                                            <td>{data.role}</td>
                                            <td>
                                                <button className='btn btn-danger mx-2' onClick={() => handleDelete(data?.id)}>
                                                    <i class="fa-solid fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    })
                                        :
                                        <tr>
                                            <td className='text-center text-danger fw-bold' colSpan={8}>
                                                Data Not Found
                                            </td>
                                        </tr>
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