// for of

const colors = ['red', 'green', 'blue'];

// for (const color of colors) {
//   console.log(color);
// }

const greetings = "hello";

for (const greet of greetings) {
    // console.log(greet);
}


const myObj = {
    name: "pulkit",
    age: "24"
}

for (const key in myObj) {
    // console.log(key, ":-", myObj[key]);
    
}

for (const key of Object.keys(myObj)) {
    // console.log(`key is ${key} and value is ${myObj[key]}`);
}


// Maps

const myMap = new Map();
myMap.set('name', 'pulkit');
myMap.set('age', 24);
myMap.set('hobby', 'coding');

// console.log(myMap)

for (const [key, value] of myMap) {
    // console.log(`key is ${key} and value is ${value}`);
}

for (const key in myMap) {
    // console.log(key);
}

const arr = [1, 2, 3, 4, 5];

for (const key in arr) {
    //console.log(key, ":-", arr[key]);    
    
}