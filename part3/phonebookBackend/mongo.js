const mongoose = require('mongoose');

if (process.argv.length<3) {
  console.log('give password as argument');
  process.exit(1);
}

const password = process.argv[2];


const url =
  `mongodb+srv://guille_calde:${password}@cluster0-aw0q2.mongodb.net/phonebook-app?retryWrites=true&w=majority`

mongoose.connect(url, {useNewUrlParser: true});

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema);



if (process.argv.length == 3){
  //Se ejecutara la busqueda
  
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person);
    })
    mongoose.connection.close();
  })
} else {
  //se ejecutara el alta 

  const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
  })

  person.save().then(response => {
    console.log(`added ${person.name} number ${person.number} to phonebook`);
    mongoose.connection.close();
  })
}

