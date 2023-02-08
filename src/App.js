import React from 'react'
import Login from './Login'
import Form from './components/Form'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"
import SideBar from './components/Sidebar/SideBar'
import Dashboard from './pages/Dashboard'
import Slidebar from './components/Slidebar'
import "./css/slidebar.css"


const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <SideBar /> */}
        <Routes>
          <Route path='/' element={<Slidebar />} />
          <Route path='/form' element={<Form />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      {/* <Login></Login>
      <Form></Form> */}
    </>
  )
}

export default App