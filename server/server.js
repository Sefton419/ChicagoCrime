const express = require('express');
// const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

app.use(express.static(__dirname + '/../'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../index.html'));
});

app.listen(3000);