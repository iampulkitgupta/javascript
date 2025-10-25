const coding = ['JavaScript', 'Python', 'C++', 'Java', 'Ruby'];


// const value = coding.forEach( (item) => {
//     //console.log(item);
//     return item;
// })

// console.log(value)

const myNums = [1,2,3,4,5,6,7,8,9,10];
// const newNums = myNums.filter( (num) => num > 4)

// const newNums = myNums.filter( (num) => {
//     return num > 4
// })

// console.log(newNums)


// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// }
// )

// console.log(newNums)


const books = [
    {title: 'Book One', author: 'Author One', rating: 4.5},
    {title: 'Book Two', author: 'Author Two', rating: 3.8},
    {title: 'Book Three', author: 'Author Three', rating: 4.2},
    {title: 'Book Four', author: 'Author Four', rating: 2.9},
    {title: 'Book Five', author: 'Author Five', rating: 4.7},
];


let goodBooks = books.filter( (book) => book.rating >= 4.0 )

goodBooks = books.filter((book) => {
    return book.rating >=4.0 && book.author.includes('Three')
})

console.log(goodBooks)