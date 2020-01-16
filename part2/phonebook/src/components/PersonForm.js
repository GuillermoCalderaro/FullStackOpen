import React from 'react'

const PersonForm = ({ persons, addPerson, newName, handleNameChange, newPhone, handleNumberChange,
    setPersons, setNewName, setNewPhone}) => {

    return (
    <>
        <form onSubmit={addPerson}>
            <div>
                <p>name: </p>
                <input value={newName} onChange={handleNameChange}/>  
            </div>
            <br />
            <div>
                <p>number: </p>
                <input value={newPhone} onChange={handleNumberChange}/>
            </div>
            <br />
            <div>
                <button type="submit" >add</button>
            </div>
        </form>
    </>
    )
}

export default PersonForm