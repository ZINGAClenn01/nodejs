const express = require('express');
const app = express();
const port = 3000; 

app.get('/', (req, res) => res.send('hello world'));

app.listen(port, () => console.log('hello world'))
// app.listen(3000, console.log('hello world'));

