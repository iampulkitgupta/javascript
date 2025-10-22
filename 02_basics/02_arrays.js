const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Batman", "Flash"]

//marvel_heros.push(dc_heros)
// console.log(marvel_heros)

const newArr = marvel_heros.concat(dc_heros)
// console.log(newArr)

const all_heros = [...marvel_heros, ...dc_heros]//spread operator
// console.log(all_heros)

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realAnotherArray = anotherArray.flat(Infinity)

// console.log(realAnotherArray)

// console.log(Array.isArray("Pulkit"))
// console.log(Array.from("Pulkit"))//from convert to array

console.log(Array.from({name: "pulkit"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
