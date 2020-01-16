const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

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
    },
    {
      "name": "Giovanni",
      "number": "321",
      "id": 6
    },
    {
      "name": "Sofia",
      "number": "45454545",
      "id": 7
    },
    {
      "name": "Gacelita",
      "number": "321321",
      "id": 8
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

const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})
