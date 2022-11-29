const http = require('http')

let server = http.createServer((req, res) => {
  // what should be shown when server loaded
  // to show html we change plain to html
  // res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'})
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
  //what to show on main mage
  // res.end('Hello Node JS')
  res.end(`
  <!doctype html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Node JS</title>
  </head>
  <body>
  <h1>Hello Node!</h1>
  </body>
  </html>
  `)
})

const PORT = 3000
const HOST = '127.0.0.1' //localhost

server.listen(PORT, HOST, () => {
  console.log(`Сервер запущено: http://${HOST}:${PORT}`)
})


