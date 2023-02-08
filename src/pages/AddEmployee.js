import React from 'react'
import ImageLogo from './Image/dash.png';
import { useState } from 'react';




export const AddEmployee = () => {
  const [empname, setName] = useState('');

  const onChangeHandler = (e) => {
    console.log(e.target.value);

  };


  return <>
    <img className='logodashboard' src={ImageLogo} alt="Logo" />
    <div className="dashname">Add Employee</div>
    <div className='container'>
      <div className='row justify-content-center pt-5'>
        <div className='col-md-5'>
          <div className='card shadow-lg p-3 md-5 bg-white rounded'>
            <div className='cart-body'>
              <div className='form-group'>
                <label htmlFor='empname' className='form-lable pt-2'>Name</label>
                <input type='text' name='empname' onChange={onChangeHandler} value={empname} className='form-control' id='empname' placeholder='FirstName SecondName LastName'></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
};

export default AddEmployee;
