const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const mongoose = require('mongoose');

const url ='mongodb+srv://guille_calde:Chichi@cluster0-aw0q2.mongodb.net/phonebook-app?retryWrites=true&w=majority'

mongoose.connect(url, {useNewUrlParser: true});

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema);

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

app.use(express.static('build'));

app.use(cors());

app.use(bodyParser.json());

app.use(morgan('tiny'));


app.get('/api/persons', (req, res) => {
  Person.find({}).then( persons =>res.json(persons.map(person =>
    person.toJSON()
  )))	  
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find(person => person.id ===id);
  if (person) {
    res.json(person);
  }else {
    res.status(404).end();
  }
})

app.get('/info', (req, res) => {
  res.send(`<p>Phonebook has info from ${persons.length} people</p><p>${Date()}</p>`);
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter(person => person.id !== id);

  res.status(204).end();
})

app.post('/api/persons', (req, res) => {
  const person = req.body;
  if (!(person.name && person.number)) {
    return res.status(404).json({
      error: 'a name and a number should be provided'
    });
  }
  if (persons.find(each => each.name === person.name)) {
    return res.status(404).json({
      error: 'the person\'s name must be unique'
    });
  }
  
  person.id = Math.random() * 1000;
  persons = persons.concat(person);	
  
  res.send(persons);

})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
