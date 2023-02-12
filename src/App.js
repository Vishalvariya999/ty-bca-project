import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import "./App.css"
import "./css/slidebar.css"
import AllRoute from './Route/AllRoute'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AllRoute />
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App