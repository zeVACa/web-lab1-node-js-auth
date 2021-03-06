const express = require('express');
const app = express();
const cors = require('cors');

const urlencodedParser = express.urlencoded({ extended: false });

app.use(cors());
app.use(urlencodedParser);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/client.js', (req, res) => {
  res.sendFile(__dirname + '/client.js');
});

app.get('/test', (req, res) => {
  // res.send('hello');
  console.log('localhost:3000/test has been requested');
  // res.send(JSON.stringify({ hello: 'world' }));
  // res.json().send({ hello: 'word' });
  res.send('hello');
});

const users = [
  {
    login: 'admin',
    password: 'password',
  },
];

// app.post('/login', urlencodedParser, (req, res) => {
//   if (users.find((user) => user.login === req.body.login && user.password === req.body.password)) {
//     res.status(200).send(`<h1>Пользователь с логином "${req.body.login}" успешно авторизован</h1>`);
//   } else {
//     res.status(401).send(`
//       <form action="http://localhost:3000/login" method="post">
//           <label>Логин</label><br>
//           <input type="text" name="login" /><br><br>
//           <label>Пароль</label><br>
//           <input type="password" name="password" /><br><br>
//           <input type="submit" value="Отправить" />
//           <h1>Неправильный логин или пароль</h1>
//       </form>
//     `);
//   }
//   res.send('POST response');
// });

app.listen(3000, () => console.log('server is running...'));
