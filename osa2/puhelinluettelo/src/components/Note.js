import React from 'react'


const Note = ({note, onClick}) => { 
  


  return (
    <li> {note.name} {note.number} <button onClick={() => onClick(note)} note={note} > delete</button></li>
  )
}
export default Note