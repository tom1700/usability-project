const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const fs = require('fs');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/save', (req, res) => {
  fs.readFile('./results.json', 'utf8', (err, data) => {
    if (err){
      console.log(err);
      res.send('not ok');
    } else {
      const obj = JSON.parse(data);
      obj.push(req.body);
      const json = JSON.stringify(obj);
      fs.writeFile('./results.json', json, 'utf8');
      res.send('ok');
    }});
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
});
