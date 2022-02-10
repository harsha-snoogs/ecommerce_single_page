import React from 'react'

function CheckBox( props ) {

  const { filterValueArray, onChangeTrigger } = props  
  let overflowProperty ={
    overflow:"auto", 
    height:"200px",
    padding:"5px"
  }
  return (
    <>
    <div style={overflowProperty} className="card">
        {filterValueArray.map((option) => (
          <div className="form-check" key={option.id}>
            <input
            className="form-check-input"
              type="checkbox"
              name={option.id}
              id={option.id}
              value={option.id}
              onChange={(e) => onChangeTrigger(e,option)}
            />
            <label className="form-check-label fs-6 fw-light text-nowrap" htmlFor={option.id}>
              {option.id}
            </label>
          </div>
        ))}
        </div>
      </>
  )
}

export default CheckBox