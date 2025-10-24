const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
//falsy values

// false
// 0
// -0
// BigInt 0n
// ""
// null
// undefined
// NaN

//truthy values

// true
// any number other than 0 and -0
// any BigInt other than 0n
// any string with at least one character
// []
// {}
// function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

//Nullish Coalescing Operator (??): null and undefined
//----------------------------------

let val1;
val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 10;
val1 = 0 ?? 10;
val1 = "" ?? "default string";
val1 = false ?? true;
val1 = NaN ?? 100;
val1 = null ?? undefined ?? "final value";

console.log(val1);



// Ternary Operator
//----------------------------------

// condition ? exprIfTrue : exprIfFalse

const age = 17;
const canVote = age >= 18 ? "can vote" : "cannot vote";
console.log(canVote);

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("Buy ice tea") : console.log("Don't buy ice tea");