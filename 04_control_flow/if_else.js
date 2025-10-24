// if 

if (true) {
  console.log("This will always run");
}{
  console.log("This will never run");
}

// if...else

const age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// if...else if...else

const score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// switch statement

const day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(`Today is ${dayName}.`);
// Ternary Operator

const isLoggedIn = true;

const message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message);
// Loops

// for loop
for (let i = 0; i < 5; i++) {
  console.log(`Iteration ${i}`);
}

// while loop
let count = 0;
while (count < 5) {
  console.log(`Count is ${count}`);
  count++;
}

// do...while loop
let num = 0;
do {
  console.log(`Number is ${num}`);
  num++;
} while (num < 5);

// for...of loop
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}

// for...in loop
const person = { name: "Alice", age: 25, city: "New York" };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Break and Continue

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Exit the loop when i is 5
  }
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(i);
}
// Nested Control Flow

const numbers = [1, 2, 3];
for (const num of numbers) {
  if (num % 2 === 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is odd`);
  }
}

