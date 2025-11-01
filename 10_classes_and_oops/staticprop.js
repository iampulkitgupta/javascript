class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){        
        return `123`
    }

}

const pulkit = new User("pulkit@google.com")
// console.log(pulkit.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const myTeach = new Teacher("pulkit", "pulkit@fb.com")
console.log(myTeach.logMe())