const express = require('express')

const app = express()

//відслідковуємо головну сторінку
app.get('/', (req, res) => {
  res.send('This home page')
})

app.get('/about', (req, res) => {
  res.send('This is about page')
})
//динамічна адреса
app.get('/user/:username/:id', (req, res) => {
  //беремо параметри з адреси і виводимо на сторінку
  res.send(`User ID: ${req.params.id}. Username: ${req.params.username}`)
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}`)
})