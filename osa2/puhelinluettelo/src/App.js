import React, {useState, useEffect} from 'react'
import Note from './components/Note'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'


const App = () => {
  const [person, setPerson] = useState([])
  const [newName, setNewName] = useState({name: '', number: ''})
  const [filteredPerson, setFilteredPerson] = useState([''])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPerson(response.data)
      })
  }, [])
  console.log('render', person.length, 'persons')


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
      window.alert(`${newName.name} is already added to phonebook`)    
    }
    else { 
      setPerson(person.concat(nameObject))        
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
