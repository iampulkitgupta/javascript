const User = {
    _email: 'pulkit@google.com',
    _password: "123a",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea._email)

