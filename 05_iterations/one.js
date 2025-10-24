// for  

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element === 5) {
        // console.log('Five found!');
    }
    // console.log(element);    

}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {        
        // console.log(`Inner Loop value: ${j} and Outer Loop value: ${i}`);
        // console.log(i + '*' + j + '=' + (i * j));
    }    
}

let myArray = ['flash', 'batman', 'superman'];
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(`Element at index ${index} is ${element}`);
}


//

// break and continue


for (let i = 1; i <= 20; i++) {
    if (i === 6) {
        console.log('Breaking the loop at 6');
        continue;
    }
    console.log(i)
}