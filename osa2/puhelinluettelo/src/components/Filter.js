import React from 'react'

const Filter = (props) => (
  <div>
    <div>filter shown with</div>
    <div><input type='text' value={props.searchTerm} onChange={props.onChange}  /></div> 
  </div>
)

export default Filter
  