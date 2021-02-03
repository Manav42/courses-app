const keys = require('./keys');

// Express App Setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgres Client Setup
const { Pool } = require('pg');
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort,
});

pgClient.on('connect', () => {
  pgClient
    .query('CREATE TABLE IF NOT EXISTS courses (id INT PRIMARY KEY, title VARCHAR ( 50 ) UNIQUE NOT NULL, description VARCHAR ( 255 ) );')
    .catch((err) => console.log(err));
});


// Express route handlers

app.get('/', (req, res) => {
  res.send('Hi');
});

app.get('/courses', async (req, res) => {
  const values = await pgClient.query('SELECT * FROM courses');
  // console.log(`Values - ${values}`);
  res.send(values.rows);
});

app.post('/course', async (req, res) => {
  const index = req.body;
  // console.log(`Index - ${index}`);
  pgClient.query('INSERT INTO courses(id, title, description) VALUES($1, $2, $3)', [index.id, index.title, index.description]);

  res.send({ working: true });
});

app.delete('/course/:id', async (req, res) => {
  const courseId = req.params.id;
  // console.log(`courseId - ${courseId}`);
  pgClient.query(`DELETE FROM courses where id = ${courseId}`);

  res.send({ working: true });
});

app.listen(5000, (err) => {
  console.log('Listening');
});
