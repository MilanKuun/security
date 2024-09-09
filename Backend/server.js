const express = require('express');

const app = express();
const port = 3000;

//database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'welkom01',
    database: 'dbecommerce',
});

  connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    console.log(password);
    return;
  }
  console.log('Connected to database as ID ' + connection.threadId);
});

app.get('/check-db-connection', (req, res) => {
    connection.query('SELECT 1', (error, results, fields) => {
      if (error) {
        console.error('Database connection failed:', error);
        res.status(500).send('Database connection failed');
      } else {
        res.send('Database connection successful!');
      }
    });
  });






app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});