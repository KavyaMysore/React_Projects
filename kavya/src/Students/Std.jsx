import React from 'react'
import { stddata } from './StudentData'

const Std = () => {
  return (
    <div>

        <h3>List Of Students</h3>
      <ol>
        {stddata.map((Name)=>{
            return <li>{Name}</li>
        })}
      </ol>
    </div>
  )
}

export default Std