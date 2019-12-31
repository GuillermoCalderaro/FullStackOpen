import React, {useState} from 'react';

const Person = ({name}) =>(
  <li>{name}</li>
)



const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('Enter a name')

  const displayNames = () => persons.map(person =>   
        <Person 
          key={person.name}
          name={person.name} 
          /> 
  )
  
  
  const addPhone = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName
    }
    setPersons(persons.concat(personObject))
    setNewName('')    
  }

  const handlePhoneChange = (event) => {
    setNewName(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPhone}>
        <div>
          name: <input value={newName} onChange={handlePhoneChange}/>
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
