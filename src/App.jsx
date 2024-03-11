
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import get_date from './assets/hooks/date'
import './App.scss'
import Planet from './assets/components/planet/Planet'
import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  
      const [dob,setdob]=useState(new Date())
      const [age,setage]=useState(0)
      const [flag,setflag]=useState(false)
      const myref= useRef(null)
      
      const calc_age_on_earth = useCallback(()=>{
        setage(((new Date() - dob)/31536000000))
        setflag(true)
      },[dob])
       
      
      useEffect(()=>{
        myref.current.addEventListener('click',calc_age_on_earth)
        //calc_age_on_earth()
        },[dob])
        
  return (
    <>
      <div className='rounded-3 d-flex justify-content-around align-items-center app-h'>
        <a href="datacode.in" target="_blank">
          <img src="https://www.datacode.in/static/media/logo.4eb691cc.svg" className="logo" alt="datacode logo" />
        </a>
       
      <h1 className='colo'>Universe Age Calculator</h1>
      </div>
      <div className='my-4 d-flex justify-content-center calc'>
        <input type="date" className='mx-4 rounded-4 dat' onChange={(e)=> {setdob(new Date(e.target.value));}}/>
        <button className='mx-4 rounded-4 age' ref={myref}>Calculate Age</button>
      </div>
      
      <div className='p-3 planets d-flex justify-content-between rounded-4 '>
        
        <Planet
        source="https://media-public.canva.com/Sbys8/MAE4nhSbys8/1/t.png"
        planet_name="Mercury"
        calc_age={(age*365/88).toFixed(1)}
        flagging={flag}>
        </Planet>
          {console.log(age)}
        <Planet
        source="https://media-public.canva.com/8K5gE/MAEcM28K5gE/1/t.png"
        planet_name="Venus"
        calc_age={(age*365/225).toFixed(1)}
        flagging={flag}>
        
        </Planet>

        <Planet
        source="https://media-public.canva.com/Bwbbc/MAEF0CBwbbc/1/t.png"
        planet_name="Earth"
        calc_age={age.toFixed(1)}
        flagging={flag}>
        </Planet>
        
        <Planet
        source="https://media-public.canva.com/Kw6to/MAEwh2Kw6to/1/t.png"
        planet_name="Mars"
        calc_age={(age*365/687).toFixed(1)}
        flagging={flag}>
        </Planet>
        
        <Planet
        source="https://media-public.canva.com/WCr1Q/MAE1qRWCr1Q/1/t.png"
        planet_name="Jupiter"
        calc_age={(age/11.8).toFixed(1)}
        flagging={flag}>
        </Planet>
        
        <Planet
        source="https://media-public.canva.com/1Z08o/MAEwh71Z08o/1/t.png"
        planet_name="Saturn"
        calc_age={(age/29.4).toFixed(1)}
        flagging={flag}>
        </Planet>
        
        <Planet
        source="https://media-public.canva.com/dJGBs/MAFiZ8dJGBs/1/t.png"
        planet_name="Uranus"
        calc_age={(age/84).toFixed(1)}
        flagging={flag}>
        </Planet>
        
        <Planet
        source="https://media-public.canva.com/CUbm8/MAFGL-CUbm8/1/t.png"
        planet_name="Neptune"
        calc_age={(age/164).toFixed(1)}
        flagging={flag}>
        </Planet>
        
      </div>
      <div >
        
      </div>
    </>
  )
}

export default App
