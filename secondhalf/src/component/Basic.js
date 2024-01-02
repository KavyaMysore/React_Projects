// ASYNC Function
let raina=()=>{
    return "Mr.IPL"
}

let vk=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve( "ee sala cup namde")  
        }, 2000)
    })
}

let abd=()=>{
    return "Mr.360"
}

let msd=()=>{
    return "Helicopter Landed"
}

let result= async()=>{
    console.log(raina())
    console.log(await vk())
    console.log(abd())
    console.log(msd())
    
}
result()