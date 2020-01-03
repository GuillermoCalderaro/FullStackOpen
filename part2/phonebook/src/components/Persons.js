import React from 'react'

const Persons = ({personsToShow, displayNames}) =>{
    return (
      <>
        <ul>
          {displayNames()}
        </ul>    
      </>
    )
  }
  

  export default Persons