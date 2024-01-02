let url="https://jsonplaceholder.typicode.com/users"

let api = async()=>{
  let response =await fetch(url)
  let data = await response.json()
  // console.log(data.length)// no of user
  console.log(data[0]) //first user
  data.map(x=>console.log(x.name))
}
api()