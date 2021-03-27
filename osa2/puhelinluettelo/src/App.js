import React, {useState} from 'react'
import Note from './components/Note'

const App = () => {
  const [person, setPerson] = useState([
    {name: 'Arto Hellas'}
  ])
const [newName, setName] = useState('')

const addName = (event) => {
  event.preventDefault()
  console.log('button clicked', event.target)
  const nameObject = {
    name: newName    
  }
  setPerson(person.concat(nameObject))
  setName(' ')
}

const handleNameChange = (event) => {
  console.log('event', event.target.value)
  setName(event.target.value)
}

  return (
    <div >
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name
          <input 
          value ={newName}
          onChange={handleNameChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <div>
          <ul>
            {person.map( note => 
              <Note key={note.name} note={note} />        
            )}            
          </ul>
        </div>
    </div>
  );
}

export default App;
