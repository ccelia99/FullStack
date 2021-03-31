import React, {useState, useEffect} from 'react'
import Note from './components/Note'

const Filter = (props) => (
    <div>
      <div>filter shown with</div>
      <div><input type='text' value={props.searchTerm} onChange={props.onChange}  /></div> 
    </div>
  )

/*const PersonForm = (props) => {
  return (
     <form onSubmit={props.onSubmit}>
      <div>
        name:<input type='text' value ={props.newName} onChange={props.onChange}  />
      </div>
      
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  )
}*/

const App = () => {
  const [person, setPerson] = useState([
    {name: 'John Doe', number: '040-1231244'},
    {name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
const [newName, setName] = useState('')
const [newNumber, setNumber] = useState('')
const [filteredPerson, setFilteredPerson] = useState([''])
const [searchTerm, setSearchTerm] = useState('')



useEffect( () => { 
   const results = person.filter( p =>
    p.name.toLowerCase().includes(searchTerm) )
    
   console.log('tulosArray ', results)
   console.log('person ', person)

    setFilteredPerson(results)
},[searchTerm, person] )

const addName = (event) => {
  console.log('tuliko nimi addNameen ', newName)
  event.preventDefault() 
  const nameObject = {
    name: newName,
    number: newNumber
  }
 
  if (person.some(p => p.name === newName)  
  ) {
    console.log('found the name')
    window.alert(`${newName} is already added to phonebook`)    
  }
  else { 
    console.log('new name')
    setPerson(person.concat(nameObject))   
    setName('') 
    setNumber('')   
  }
}

const handleNameChange = (event) => {  
  setName(event.target.value)
}

const handleNumberChange = (event) => {
  setNumber(event.target.value)
}  

const handleSearchTerm = (event) => {
  setSearchTerm(event.target.value)
}

  return (
    <div >
      <h2>Phonebook</h2>
      <Filter searchTerm={searchTerm} onChange={(event) => handleSearchTerm(event) } />   
      <h3>Add a new</h3>  
      <form onSubmit={addName}>
      <div>
        name:<input type='text' value ={newName} onChange={handleNameChange}  />
      </div>
      <div>
        number:<input type='text' value={newNumber} onChange={handleNumberChange}  />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
      
      
      <h2>Numbers</h2>
        <div>
          <ul>
            {filteredPerson.map( note => 
                <Note key={note.name} note={note} />        
              )}  
          </ul>
        </div>
    </div>
  );
}

export default App;
