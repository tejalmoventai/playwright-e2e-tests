/**
 * Promise
 */

let proObj = new Promise((resolve, reject)=>{
    console.log(`Executing the promise...`)
    if(1>2){
      setTimeout(()=>{
        resolve("promise is resolved and we got data...")
    }, 2000)  
    } else{
        setTimeout(()=>{
            reject("some error occured in promise...")
    }, 2000)
    } 
})

// proObj.then((res)=>{
//     console.log(res)
//     return `${res} updated with more values`
// }).then((updatedValue)=>{
// console.log(updatedValue)
// }).
// catch((err)=>{
//     console.log(err)
// })

//using async and await

async function getData() {
    try {
        let res = await proObj
        console.log(res)
    } catch (error) {
      console.log(error)  
    }
}

getData();
