import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InputData } from '../Redux/Action/Action'

const FormInput = (props) => {
    const {name,type,val,place,nameclass,label,op} = props
    const {input} = useSelector((stat) => stat.LoginEx)
    const dispatch = useDispatch()
    const handleChange = (e) =>  {
        const value = e.target.value

        dispatch(InputData(e.target.name,value))

    }
    const element = props.element === "input" ?
    <div className='form-group'>
    <label>{label}</label>
    <input type={type} name={name} className={nameclass} placeholder={place} value={input?.[name]} onChange={handleChange} />
    </div>
    :
    <div className="form-group">
        <label htmlFor="">{label}</label>
        <select name={name} id="" onChange={handleChange} value={input?.[name]} className={nameclass}>
            {
                op.map((c) => {
                   return <option value={c} key={c}>{c}</option>
                })
            }
        </select>
    </div>
  return (
    <>
    {
        element
    }
    </>
  )
}

export default FormInput