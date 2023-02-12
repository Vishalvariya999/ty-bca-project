import React from 'react'
import Login from './components/Login'
import Form from './components/Form'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"
import Slidebar from './components/Sidebar/SideBar'
import "./css/slidebar.css"
import ProtectRoute from './Route/ProtectRoute'
import AllRoute from './Route/AllRoute'

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <SideBar /> */}
        <AllRoute />
      </BrowserRouter>
      {/* <Login></Login>
      <Form></Form> */}
    </>
  )
}

export default App