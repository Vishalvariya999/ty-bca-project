import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InputData } from '../../Redux/Action/Action'

const FormInput = (props) => {
  const { name, type, val, place, nameclass, label, op, disabled } = props
  const { input } = useSelector((stat) => stat.LoginEx)
  console.log('input', input)
  const dispatch = useDispatch()
  const handleChange = (e) => {
    const value = e.target.value
    dispatch(InputData(e.target.name, value))
  }

  const element = props.element === "input" ?
    <div className='form-group'>
      <label className='p-1'>{label}</label>
      <input type={type} name={name} disabled={disabled} className={nameclass} placeholder={place} value={input?.[name]} onChange={handleChange} />
    </div>
    :
    props.element === "image" ?
      <>
        <div>
          <label>{label}</label>
          <input
            type={type}
            name={name}
            value={input?.[name]}
            onChange={handleChange}
          />
        </div>
      </>
      :
      <div className="form-group">
        <label htmlFor="" className='p-1'>{label}</label>
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