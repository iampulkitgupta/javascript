let myName = new String("pulkit      ")
let myChannel = new String("Chai        ")
console.log(myName.length);

String.prototype.truelength = function(){    
    console.log(`True Length of string is ${this.trim().length}`)
}

myName.truelength();
myChannel.truelength()


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);        
    }
}

// heroPower.getSpiderPower()

Array.prototype.pulkit = function(){
    console.log("Pulkit is in All Array")
}


myHeros.pulkit();
// heroPower.pulkit()



//inheritence

const User = {
    name: "chai",
    email: "chai@google.com "
}


const Teacher = {
    makeVideo: true

}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)



"pulkit".truelength();
