const express = require('express');
const app = express();

// const server = http.createServer((req, res) => {
//   if (req.method === 'GET') {
//     res.end(`
//       <input type="text" />
//     `);
//   }
// });

app.get('/', (req, res) => {
  res.send(`
  <form action="http://localhost:3000/login" method="post">
  <label>Логин</label> <input type="text" name="login"><br><br>
  <label>Пароль</label> <input type="password" name="password"><br><br>
  <button type="submit">отправить</button>
   </form>
  `);
});

app.post('/login', (req, res) => {
  console.log(req);
  res.send('POST response');
});

app.listen(3000, () => console.log('server is running...'));
