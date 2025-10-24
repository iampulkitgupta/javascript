//  while
let count = 0;
while (count < 10) {
    //console.log(`Count value is: ${count}`);
    count++;
    // if (count == 10){
    //     break;
    // }
}


let myArray = ['flash', 'batman', 'superman'];

while (myArray.length > 0) {
    const element = myArray.shift();
    console.log(`Element is: ${element}`);

}


// do while
let doCount = 11;
do {
    console.log(`Do While Count value is: ${doCount}`);
    doCount++;
} while (doCount < 10);