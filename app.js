const express = require('express'),
			bodyParser = require("body-parser")
const app = express();
const port = 8000;
const request = require('request');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'))



app.all('/*',function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/contact', function (req, res) {

  var options = {
    method: 'GET',
    url: 'https://books.zoho.com/api/v3/contacts?organization_id=649249007',
    headers: {
      authorization: "Zoho-authtoken db36e02a50b57e081efe533a8a0f834b",
			'content-type': "application/x-www-form-urlencoded;charset=UTF-8"
    }
  };

  request(options, function (error, response, body) {
    if (error){
      throw new Error(error)
      res.send(error)
    }
    res.send(body);
  });

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))