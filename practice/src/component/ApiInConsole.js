let url="https://jsonplaceholder.typicode.com/users"

let fetchData=async()=>{
    let response=await fetch(url)
    let data=await response.json()
    console.log(data[0])
    data.map(x=>console.log(x.name))
}
fetchData()