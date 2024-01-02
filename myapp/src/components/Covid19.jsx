import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Covid19 = () => {
    let [state, setState] = useState([])

    useEffect(()=>{
        axios.get("https://data.covid19india.org/data.json")
        .then(res => setState(res.data.statewise[0]))
    },[])

  return (
    <>
      <h1 className='text-center py-5'>INDIA COVID 19 CASE DETAILS</h1>

      <div style={{display:"flex", justifyContent:"space-between"}}>
        <CovidCard covid={state.active} h="ACTIVE CASES"/>
        <CovidCard covid={state.confirmed} h="CONFIRMED"/>
        <CovidCard covid={state.deaths} h="DEATH CASES"/>
        <CovidCard covid={state.recovered} h="RECOVERED"/>

      </div>


      <h1 className='text-center py-5'>DELTA CASES</h1>

      <div style={{display:"flex", justifyContent:"space-between"}}>
        <CovidCard covid={state.deltadeaths} h="DEATH CASES"/>
        <CovidCard covid={state.deltaconfirmed} h="CONFIRMED"/>
        <CovidCard covid={state.deltarecovered} h="RECOVERED"/>

      </div>
    </>
  )
}

export default Covid19





export const CovidCard = (props) => {
    let{covid,h}=(props)
  return (
    <div className="card-text-center text-bg-primary mb-3" style={{maxWidth:"20rem"}}>
        <h3 className='card-header'>{h}</h3>
  <div className="card-body">
    <h1 className="card-title">{covid}</h1>
   
  </div>
</div>
   
  )
}




