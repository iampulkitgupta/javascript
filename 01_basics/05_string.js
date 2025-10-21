const name = "Pulkit"
const repoCount = 50

//console.log(name + repoCount);

console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`)// String Interpolation


const gameName = new String('pulkit-pg-com')


console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))

console.log(gameName.indexOf('t'))


const newString = gameName.substring(0, 4)

console.log(newString)


const anotherString = gameName.slice(-7, 4)

console.log(anotherString)


const newStringOne = " pulkit  "

console.log(newStringOne)
console.log(newStringOne.trim())


const url = "htttps://pulkit.com/pulkit%20gupta"

console.log(url.replace('%20', '-'))


console.log(url.includes('hitesh'))


console.log(gameName.split('-'))