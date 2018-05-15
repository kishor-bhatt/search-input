const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    
    if ('OPTIONS' === req.method) {
        res.send(200);
    } else {
        next();
    }
};

app.use(allowCrossDomain);
app.use(express.static('../dist/'));

app.get('/*', (request, response) => {
    response.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    return console.log('error occured', err)
  }
  console.log(`server is running on ${port}`)
})