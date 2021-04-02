import React from 'react'

const Filter = (props) => (
  <div>
    <div>Find countries</div>
    <div><input type='text' value={props.searchTerm} onChange={props.onChange}  /></div> 
  </div>
)

export default Filter
  