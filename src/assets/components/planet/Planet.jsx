import React from 'react'
import App from '../../../App'
function Planet({
    source,
    planet_name,
    calc_age,
    flagging
}) {
  return (
    <>
       <div className='d-flex align-items-center planet'>
        <img src={source} alt="" className='ima'/>
       { flagging ? <p className='para rounded-4 p-3'>{planet_name}:{calc_age} years</p>:<p className='para rounded-4 p-2'>{planet_name}</p> }
       </div> 
    </>
  )
}

export default Planet