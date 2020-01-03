import React from 'react'

const Filter = ({newFilter, handleFilterChange}) => (
    <>
    filter names with: <input value={newFilter} onChange={handleFilterChange} />
    </>
  )

export default Filter