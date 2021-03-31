import React from 'react'
import Note from './Note'

const Persons = (props) => (
    <div>
      <ul>
        {props.list.map( note => 
            <Note key={note.name} note={note} />        
          )}  
      </ul>
    </div>
  )
  export default Persons