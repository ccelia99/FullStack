import React, {useState} from 'react'
import Note from './components/Note'

const App = () => {
  const [person, setPerson] = useState([
    {name: 'John Doe'}
  ])
const [newName, setName] = useState('')

const addName = (event) => {
  event.preventDefault() 
  const nameObject = {
    name: newName    
  }
  let found = person.some(p => p.name === newName)
  
 
  if (found) {
    console.log('found the name')
    window.alert(`${newName} is already added to phonebook`)    
  }
  else { 
    console.log('new name')
    setPerson(person.concat(nameObject))    
  }
  setName('')   
   
}

const handleNameChange = (event) => {  
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
