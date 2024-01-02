import React, { useEffect, useState } from 'react'

const WeatherApi = () => {
   let[search,setSearch]= useState("bengaluru")
   let [state, setState]= useState("")
   let [submit,setSubmit]= useState(state)
  const api={
    key:"d78be272960a37db1f21d63069f30e96",
    base:"https://api.openweathermap.org/data/2.5/"
  };

  function handleSubmit(e){
    e.preventDefault()
    setSubmit(state)
  }

  useEffect(()=>{
    fetch(`${api.base}weather?q=${search}&appid=${api.key}&units=metric`)
    .then((res)=> res.json())
    .then(data=> {
      setState(data)
      console.log(data)
    })
  },[search])
  return (
    <>

    <h1>Weather App</h1>
    <form action="">
      <input type="text" onChange={e=> setSearch(e.target.value)}  placeholder='search'/>
    <button onSubmit={handleSubmit} >Search</button>
    </form>

<p>{submit.name}</p>
<p>{submit.main ? state.main.temp : null}</p>
<p>{submit.weather ? state.weather[0].main : null}</p>
<p>{submit.wind ? state.wind.speed : null}</p>

    </>
  )
}

export default WeatherApi
