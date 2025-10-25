const coding = ["js", "ruby", "python", "java", "c++"];

coding.forEach( function (item) {
    // console.log(item)
} )

coding.forEach( (item) => {
    // console.log(item)
})

function printMe(item){
    // console.log(item)
}

coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr)
// })

const myCoding = [
    {
        languageName: "javascript",
        languageAbbr: "js"
    },
    {
        languageName: "ruby",
        languageAbbr: "rb"
    },
    {
        languageName: "python",
        languageAbbr: "py"      
    }
]

myCoding.forEach((item, index)=>{
    console.log(item.languageName, index)
})