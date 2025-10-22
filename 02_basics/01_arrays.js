//array

const myArr = [0, 8, 2, 3, 9, 5]//array elements can be of different types
const myHeros = ["Superman", "Spiderman", "Captain America", "Dr. Strange"]

const myHeros2 = new Array(1,2,3,6)

// console.log(myArr[4])

// console.log(myHeros)
// console.log(myHeros2)
// myArr.push(6)
// myArr.push(7)
// myArr.push(10)

// console.log(myArr)

// myArr.pop()

// console.log(myArr)

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))

const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)


//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1)

console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2)

//slice vs splice
//


