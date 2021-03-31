import React, {useState, useEffect} from 'react'
import Note from './components/Note'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'


const App = () => {
  const [person, setPerson] = useState([
    {name: 'John Doe', number: '040-1231244'},
    {name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState({name: '', number: ''})
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
    console.log('tuliko nimi addNameen ', newName.name)
    event.preventDefault() 
    const nameObject = {
      name: newName.name,
      number: newName.number
    }
  
    if (person.some(p => p.name === newName.name)  
    ) {
      console.log('found the name')
      window.alert(`${newName.name} is already added to phonebook`)    
    }
    else { 
      console.log('new name')
      setPerson(person.concat(nameObject))
      
      //Clear the name and number fields
      setNewName({name: '', number: ''})
      console.log('newName', newName.name)
      setNewName({...newName, name: '' })        
      console.log('newName', newName.name)
      setNewName('')        
      console.log('newName', newName.name)      
    }  
  }

  useEffect( () => { 
    console.log('newName', newName.name)
  },[newName] )

  const handleAddPerson = (event) => {
    console.log('event.target.name ', event.target.name) 
    console.log('event.target.value ', event.target.value)
    setNewName({...newName,
      [event.target.name]: event.target.value
    })
  }

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div >
      <h2>Phonebook</h2>
      <Filter searchTerm={searchTerm} onChange={handleSearchTerm} /> 

      <h3>Add a new</h3>  
      <PersonForm onSubmit={addName} onChange={handleAddPerson} />
      
      <h2>Numbers</h2>
      <Persons list={filteredPerson} />
    </div>
  );
}

export default App;
