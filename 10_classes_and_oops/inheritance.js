class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course added by ${this.username}`)
    }
}


const myTeacher = new Teacher("pulkit", "pulkit@fb.com", "123")

myTeacher.addCourse()
myTeacher.logMe()
console.log(myTeacher)

const myUser = new User("advik@gmail.com")

myUser.logMe()
