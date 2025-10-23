// Immediately Invoked Function Expressions (IIFE)

aname = "MyApp";

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
    // console.log(this)
})();

((name) => {
    //unnamed IIFE
    console.log(`DB CONNECTED2 ${name}`)
})(aname);
