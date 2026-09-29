// Nested timers run in sequence, with a 100 ms delay between each step.

setTimeout(()=>{
    console.log("Step 1")
    setTimeout(()=>{
        console.log("step 2")
        setTimeout(()=>{
            console.log("Step 3")
        }, 100)
    }, 100)
}, 100)

// This promise rejects because 5 is an odd number.
let promise = new Promise((resolve,reject)=>{
    if(5%2==0){
        resolve("Even number")
    }else{
        reject("odd number")
    }
})
// Handle a fulfilled promise with then() and a rejected promise with catch().
promise
.then(result=>console.log(result) )
.catch(error=>console.log(error))


// Each then() receives the previous returned value and adds 10 to it.
Promise.resolve(10)
.then(result=>{
    console.log(result)
    return result +10
})
.then (result=>{
    console.log(result)
    return result +10
})
.then (result=>{
    console.log(result)
    return result +10
})
.catch(error=>console.log(error))

// Pass a mark through multiple promise handlers and test whether it exceeds 35.
Promise.resolve(80)
.then(mark=>{
    console.log("mark ", mark)
    return mark+5
})
.then(mark=>{
    console.log("updated ",mark)
    return mark>35
})
.then(result=>console.log("result ",result))

function getData(){
    // Resolve the promise after simulating a 2-second asynchronous operation.
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve ("Data Recived")
        },2000)
    })
}

async function displayData(){
    // await pauses this function until getData() resolves.
    let answer = await getData()
    console.log(answer)
}
displayData()

// Fetch product data, convert the response to JSON, and handle errors.
fetch("https://fakestoreapi.com/products/1")
 .then(Response=>Response.json())
 .then(data=>console.log(data))
 .catch(error=>console.log(error))