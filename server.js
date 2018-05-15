const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.use(express.static(__dirname + '/dist'));

app.get('/*', (request, response) => {
    response.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    return console.log('error occured', err)
  }
  console.log(`server is running on ${port}`)
})