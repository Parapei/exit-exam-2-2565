const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./db')
var fs = require('fs');
const cors = require('cors');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})

app.get('/log', (req, res) => {
  res.json(db)
})

app.get('/log/:id', (req, res) => {
  res.json(db.find(num => num.id === req.params.id))
})

app.post('/log', (req, res) => {
  db.push(req.body)
  WriteFile(db)
  res.status(201).json(req.body)
})

app.delete('/log/:id', (req, res) => {
  const deletedIndex = db.findIndex(num => num.id === req.params.id)
  db.splice(deletedIndex, 1)
  WriteFile(db)
  res.status(204).send()
})

app.put('/log/:id', (req, res) => {
  const updateIndex = db.findIndex(num => num.id === req.params.id)
  res.json(Object.assign(db[updateIndex], req.body))
})

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