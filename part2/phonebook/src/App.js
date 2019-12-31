import React, {useState} from 'react';


//this component displays a persons name and phone number
const Contact = ({name, number}) =>(
  <li>{name} {number}</li>
)

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('Enter a name')
  const [ newPhone, setNewPhone] = useState('Enter a phone number')


  
  const displayNames = () => persons.map(person =>   
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

  
  return (
    <div>
      <h2>Phonebook</h2>
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
