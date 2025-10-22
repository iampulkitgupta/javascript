const tinderUser = new Object()
// const tinderUser ={}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "pulkit",
            lastName: "Gupta",
        }
    }
}

// console.log(regularUser)
// console.log(regularUser.fullName.userFullName.firstName)

const obj1 = {
    1: "a",
    2: "b"    
}

const obj2 = {
    3: "a",
    4: "b"    
}

const obj3 = {...obj1, ...obj2}
const obj4 = {obj1, obj2}

const obj5 = Object.assign({}, obj1, obj2)
// console.log(obj3)
// console.log(obj4)
// console.log(obj5)

const users = [
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 2,
        email: "a@gmail.com"
    },
    {
        id: 3,
        email: "k@gmail.com"
    },
]

// console.log(users[1].email)

// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLogged'))

//de structure object

const course = {
    coursename: "JavaScript",
    price: "999",
    courseInstructor: "Pulkit"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor)

console.log(navbar)



// {
//     "name": "pulkit",
//     "courseName": "JavaScript",
//     "price": "free"
// }


[
    {},
    {},
    {}
]