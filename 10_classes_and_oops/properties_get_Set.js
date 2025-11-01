function User(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(value){
            this._password = value
        }
    })
}

const pulkit = new User("pulkit.google.com", "123")
console.log(pulkit.password)