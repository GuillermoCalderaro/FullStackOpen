import React from 'react'

const Filter = ({newFilter, handleFilterChange}) => (
    <>
      <p>filter names with: </p>
      <input value={newFilter} onChange={handleFilterChange} />
    </>
  )

export default Filter