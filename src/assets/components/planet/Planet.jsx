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
       { flagging ? <p>{planet_name}:{calc_age} years</p>:<p>{planet_name}</p> }
       </div> 
    </>
  )
}

export default Planet