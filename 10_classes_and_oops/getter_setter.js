class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value;
    }

}

const pulkit = new User("pulkit@google.com", "123a")
console.log(pulkit.password)

