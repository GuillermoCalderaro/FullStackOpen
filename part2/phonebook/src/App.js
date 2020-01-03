import React, {useState} from 'react';


//this component displays a persons name and phone number
const Contact = ({name, number}) =>(
  <li>{name} {number}</li>
)

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }]
  ) 
  const [ newName, setNewName ] = useState('Enter a name')
  const [ newPhone, setNewPhone] = useState('Enter a phone number')
  const [ newFilter, setNewFilter] = useState('Enter a name to filter')
  const [ show, setShow] = useState('')

  var personsToShow = (show === '') 
      ? persons 
      : persons.filter(person => person.name.toUpperCase().startsWith(show.toUpperCase()));
  
  const displayNames = () => personsToShow.map(person =>   
        <Contact 
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

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
    setShow(event.target.value);
    //personsToShow = persons.filter(person => person.name.startsWith(show))
    //console.log(show);
    // console.log(persons);
    // console.log(personsToShow);
  }

  console.log("Persons:", persons);
  console.log(show);  
  console.log("Persons to show:", personsToShow);
  
  return (
    <div>
      <h2>Phonebook</h2>
        filter names with: <input value={newFilter} onChange={handleFilterChange} />
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>  
        </div>
        <br />
        <div>
          number: <input value={newPhone} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {displayNames()}
      </ul>
      
    </div>
  )
}
export default App;
