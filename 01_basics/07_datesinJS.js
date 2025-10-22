let myDate = new Date()

// console.log(myDate.toDateString())
// console.log(myDate.getTimezoneOffset())


let myCreatedDate = new Date("01-03-2025")

// console.log(myCreateDate.toLocaleString())

let myTimestamp = Date.now()

// console.log(myTimestamp)
// console.log(myCreateDate.getTime())

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()

// console.log(newDate)

// console.log(`${newDate.getDay()}`)


console.log(newDate.toLocaleString('default', {
    weekday: "long",    
}))

