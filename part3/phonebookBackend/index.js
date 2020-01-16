const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

app.use(express.static('build'));

app.use(cors());

app.use(bodyParser.json());

app.use(morgan('tiny'));

let persons = [
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    },
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": 3
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 4
    },
    {
      "name": "Guille",
      "number": "123",
      "id": 5
    }
  ]

app.get('/api/persons', (req, res) => {
  res.json(persons);
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
