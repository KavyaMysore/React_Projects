import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CovidTable = () => {
let [state, setState]= useState([])
    useEffect(() =>{
        axios.get("https://data.covid19india.org/data.json")
        .then(res => setState(res.data.statewise))
      },[])

  return (
    <>
    <br /><br /><br />
        <h1>COVID TABLE</h1>
        <br />
        <table className='table table-bordered table-hover table-striped table-light'>
            <thead className='table-dark'>
                <tr>
                    <th>STATES</th>
                    <th>ACTIVE CASES</th>
                    <th>CONFIRMED CASES</th>
                    <th>DEATHS</th>
                </tr>
            </thead>
            <tbody>
                {
                    state.map((state_obj) =>{
                        return <tr>
                            <td>{state_obj.state}</td>
                            <td>{state_obj.active}</td>
                            <td>{state_obj.confirmed}</td>
                            <td>{state_obj.deaths}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
  )
}

export default CovidTable






