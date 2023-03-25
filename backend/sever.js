const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./db')
var fs = require('fs');
const cors = require('cors');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

//API Land
app.get('/', (req, res) => {
  res.send('Hello World')
})
//Localhost:3000
app.listen(3000, () => {
  console.log('Start server at port 3000.')
})
// get all from database
app.get('/msglog', (req, res) => {
  res.json(db)
})
// get from id
app.get('/msglog/:id', (req, res) => {
  res.json(db.find(num => num.id === req.params.id))
})
// save to db
app.post('/msglog', (req, res) => {
  db.push(req.body)
  WriteFile(db)
  res.status(201).json(req.body)
})
// delete by ID
app.delete('/msglog/:id', (req, res) => {
  const deletedIndex = db.findIndex(num => num.id === req.params.id)
  db.splice(deletedIndex, 1)
  WriteFile(db)
  res.status(204).send()
})
// Write to DB
function WriteFile(obj){
  var jsonContent = JSON.stringify(obj);
  console.log(jsonContent);
  fs.writeFile("db.json", jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
    console.log("JSON file has been saved.");
});
}