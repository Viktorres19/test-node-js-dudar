const express = require('express')

const app = express()
// додаємо налаштування
app.set('view engine', 'ejs')

//відслідковуємо головну сторінку
app.get('/', (req, res) => {
  // res.sendFile(__dirname + '/index.html')
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})
app.get('/user/:username', (req, res) => {
  let data = {username: req.params.username, hobbies: [ 'Football', 'Skate', 'Baskeball' ] }
  res.render('user', data)
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}`)
})