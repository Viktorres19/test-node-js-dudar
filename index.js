const fs = require('fs') //module filesystem

//to read from file
let result = fs.readFileSync('some.txt', 'utf-8') // запускається синхронно

//Example with callback inside
/*fs.readFile('some.txt', 'utf-8', (err, data) => {
  fs.writeFile('some.text', data + '\nSome text', (err, data) => {
    console.log('Все сработало!')
  })
})*/

console.log(result)

fs.writeFileSync('some.txt', result + '\nHello World!') // created file and added text inside (rewrite) / запускається синхронно

