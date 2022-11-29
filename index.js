const fs = require('fs') //module filesystem

//create folder syncronizly
//fs.mkdirSync('text-files');

//create folder async
/*fs.mkdir('text-files', () => {
  fs.writeFile('./text-files/some.txt', 'Hello', () => { })
});*/

//delete folder and
fs.unlink('./text-files/some.txt', () => {
  fs.rmdir('./text-files', () => { })
})


