import React from 'react'

const PersonForm = ({ persons, addPerson, newName, handleNameChange, newPhone, handleNumberChange,
    setPersons, setNewName, setNewPhone}) => {

    return (
    <>
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
    </>
    )
}

export default PersonForm