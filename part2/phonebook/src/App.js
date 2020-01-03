import React, {useState, useEffect} from 'react';
import Persons from './components/Persons'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import axios from 'axios'


const App = () => {


  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }

  useEffect(hook, []);


  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('Enter a name')
  const [ newPhone, setNewPhone] = useState('Enter a phone number')
  const [ newFilter, setNewFilter] = useState('Enter a name to filter')
  const [ show, setShow] = useState('')


  //updates the elements in the personsToShow array every time the aplication render its content
  var personsToShow = (show === '') 
      ? persons 
      : persons.filter(person => person.name.toUpperCase().startsWith(show.toUpperCase()));


      
  const displayNames = () => personsToShow.map(person =>   
    <Person 
      key={person.name}
      name={person.name} 
      number={person.number}
      /> 
  )
  //this function adds a person with its phone number to the phonebook
  //it validates that the persons name is not empty
  //and that it hasn`t been already register

  const addPerson = (event) => {
    event.preventDefault();
    if (newName) {
      if (! persons.map((person) => person.name).includes(newName)){
        const personObject = {
          name: newName,
          number: newPhone
        }
        setPersons(persons.concat(personObject))  
      }else {
        window.alert(`${newName} already exists in your phonebook.`);
      } 
    }else {
      window.alert(`The name field must contain at least one character`);
    }
    setNewName('')    
    setNewPhone('')
  }

  //this function refresh the name field with its content
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  //this function refresh the number field with its content
  const handleNumberChange = (event) => {
    setNewPhone(event.target.value);
  }

  //this function refresh the filter field and 
  //with each modification it modifies the show variable
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
    setShow(event.target.value);
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>
      <h3>add a new</h3>
      <PersonForm persons={persons} addPerson={addPerson}
                  newName={newName} handleNameChange={handleNameChange}
                  newPhone={newPhone} handleNumberChange={handleNumberChange}
                  setPersons={setPersons} setNewName={setNewName} setNewPhone={setNewPhone}/>
      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} displayNames={displayNames}/>
    </div>
  )
}

export default App;
