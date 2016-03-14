

//Author: Rishabh Munde


var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('fusion_demo', ['fuel_price']);      //mongojs('Database_name',[Collection_Name])
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());


//get request to server to get all the data from PETROL_DATA database (returning as a JSON object)
app.get('/ptdata1', function (req, res) 
{
  console.log('I received a GET request');

  db.fuel_price.find({},{_id:0,month:1,petrol:1},function (err, docs)         //fuel_price is the collection where the values are stored
  {

    for(index in docs)
    {
      var str=JSON.stringify(docs[index]);
      str=str.replace("\"month\"","\"label\"");
      str=str.replace("\"petrol\"","\"value\"");
      docs[index]=JSON.parse(str);
    }
    res.send(docs);
  });
});

app.listen(3002);
console.log("Server running on port 3002");