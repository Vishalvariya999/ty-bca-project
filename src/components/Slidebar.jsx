import React from 'react'
import {GoThreeBars} from 'react-icons/go'

const Slidebar = () => {
  return (
    <>
    <div className='conainer-fluid'>
        <div className="row">
            <div class="col-xs-2 col-sm-2 col-lg-2 col-xl-2 col-xxl-2 px-0">
                <img class="img logo w-100" src="./images/logo.png" alt="" />
                <div class="sidebar bg-dark h-100">
                    <ul class="list-group list-group py-3 rounded-0">
                        <li class="list-group-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-microsoft" viewBox="0 0 16 16">
                                <path
                                    d="M7.462 0H0v7.19h7.462V0zM16 0H8.538v7.19H16V0zM7.462 8.211H0V16h7.462V8.211zm8.538 0H8.538V16H16V8.211z" />
                            </svg>
                            <span>Dashboards</span>
                        </li>
                        <li class="list-group-item bg-light text-dark">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                                <path
                                    d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" />
                            </svg>
                            <span>Insight</span>
                        </li>
                        <li class="list-group-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-file-earmark-text" viewBox="0 0 16 16">
                                <path
                                    d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                <path
                                    d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                            </svg>
                            <span>Feed</span>
                        </li>
                        <li class="list-group-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            </svg>
                            <span>Account</span>
                        </li>
                    </ul>
                </div>
            </div>
            {/* second part */}
            <div class="col-xs-10 col-sm-10 col-lg-10 col-xl-10 col-xxl-10  py-0 px-0">
                <div class="top-nav px-0 bg-light fs-4 shadow">
                    <p className='d-flex justify-content-between'>
                        <div>
                            <GoThreeBars className='slidebarIcon'/>
                        </div>
                        <div>
                            <a class="text-decoration-none text-dark p-4 fw-bold" href="#">SIGN OUT</a>
                        </div>
                    </p>
                </div>
                <div className='d-flex flex-wrap justify-content-around mt-4'>
                    <div className='border'>
                        <h3>Hello</h3>
                        <p>gbsdbgkjsdbg</p>
                    </div>
                    <div className='border'>
                        <h3>Hello</h3>
                        <p>gbsdbgkjsdbg</p>
                    </div>
                    <div className='border'>
                        <h3>Hello</h3>
                        <p>gbsdbgkjsdbg</p>
                    </div>
                </div>
                <div class="shadow-lg m-3 mt-5 p-2"><hr />
                    <div>
                        <h3 class="text-center fw-bold">Top Holdings</h3>
                            <div class="row">
                                <h1>Hello</h1>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Slidebar