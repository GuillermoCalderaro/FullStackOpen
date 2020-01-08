const express = require('express');
const app = express();

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

const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})