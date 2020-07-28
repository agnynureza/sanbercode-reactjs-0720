var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise
for(let i=0 ; i < books.length ; i ++) {
    readBooksPromise(1000,books[i]).then(function(fulfill){
        console.log(fulfill)
    })
    .catch(function(err){
        console.log(err)
    })
}