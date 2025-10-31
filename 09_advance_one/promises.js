const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, N/W calls
    setTimeout(function(){        
        // console.log('Async task 1')        
        resolve();
    }, 2000)
})

promiseOne.then(function(){
    // console.log("Async 1 resolved")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        // console.log("Async task 2")
        resolve()
    }, 1000)
}).then(function(){
    // console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"pulkit", email:"pulkit@google.com"})
    }, 1000)
})

promiseThree.then(function(user){
    // console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "advik", password: 123})
        }else{
            reject('ERROR, Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    // console.log(user)
    return user.username
}).then((myUsername)=>{
    // console.log(myUsername)
}).catch((error)=>{
    // console.log(error)
}).finally(()=> console.log('Promise is completed'))

const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "js", password: 123})
        }else{
            reject('JS, Something went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch(error){
        console.error(error)
    }
    
}

consumePromiseFive()

// async function getAllUsers(){
//    try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data)
//    }catch(error){
//     console.log("E: ", error)
//    }
// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> {
    response.json()
})
.then((data)=> {
    console.log(data)
})
.catch((error)=> {
    console.log(error)
})
