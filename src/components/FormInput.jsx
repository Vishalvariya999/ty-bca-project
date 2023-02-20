import React from 'react'

const FormInput = (props) => {
    const {name,type,val,place,nameclass,label,op} = props
    const handleChange = () => {

    }
    const element = props.element === "input" ?
    <div className='form-group'>
    <label>{label}</label>
    <input type={type} name={name} className={nameclass} placeholder={place} value={val} onChange={handleChange} />
    </div>
    :
    <div className="form-group">
        <label htmlFor="">{label}</label>
        <select name="" id="" className={nameclass}>
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