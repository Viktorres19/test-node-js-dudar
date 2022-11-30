const express = require('express')

const app = express()
// додаємо налаштування
app.set('view engine', 'ejs')
// проміжне ПО - Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

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
//метод спрацює, якщо за цією адресою будуть передані дані
app.post('/check-user', (req, res) => {
  // ми помістимо в цю змінну те, що ми отримуємо від користувача
  let username = req.body.username
  // перевіряємо отримані дані
  if(username == "")
    //робимо переадресацію
    return res.redirect('/')
  //також переадресацію на сторінку юзера, якщо ім'я введено
  else
    return res.redirect('/user/' + username)
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}`)
})