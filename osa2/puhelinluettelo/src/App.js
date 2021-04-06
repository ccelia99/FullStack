import React, {useState, useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/person'
import Notification from './Notification'

const App = () => {
  const [person, setPerson] = useState([])
  const [newName, setNewName] = useState({name: '', number: ''})
  const [filteredPerson, setFilteredPerson] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPerson(initialPersons)
      })
  }, [])


  useEffect( () => {       
      const results = person.filter( p =>
        p.name.toLowerCase().includes(searchTerm) )      
      setFilteredPerson(results)      
  },[person,searchTerm] )
  
  const addName = (event) => {
    event.preventDefault() 
    const nameObject = {
      name: newName.name,
      number: newName.number
    }
  
    if (person.find(p => p.name === newName.name)) {
      if (window.confirm(`${newName.name} is already added to phonebook. Replace the old number with a new one?`)) {
        const id = person.find( ({name}) => 
          name === newName.name ).id
        console.log('id', id)

        personService
          .update(id, nameObject)
          .then(returnedNote => {
            
            setErrorMessage(
              `Changed the number of ${newName.name}`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
            setPerson(person.map(note => note.id !== id ? note : returnedNote))
        })
        .catch(error => {
          setErrorMessage(
            `Error ${error}`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
          setPerson(person.filter(n => n.id !== id))
        })          
      }
    }
    else { 
      personService
      .create(nameObject)
      .then(returnedPerson => {
        setErrorMessage(
          `Added ${newName.name}`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setPerson(person.concat(returnedPerson))
        setNewName({name: '', number: ''})                  
      })
      
      console.log('newName', newName.name )           
    }  
  }

  const handleAddPerson = (event) => {
    console.log('event.target.name ', event.target.name) 
    console.log('event.target.value ', event.target.value)
    setNewName({...newName,
      [event.target.name]: event.target.value
    })
  }

  const handleDeletePerson = (note) => {   
    if (window.confirm(`Do you really want to delete ${note.name}?`)) {
      personService
        .deletePerson(note.id)

      setErrorMessage(
        `Deleted ${note.name}`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      setPerson(person.filter(n => n.id !== note.id))
    }       
  }

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value)
    console.log('person', person)   
  }

  return (
    <div >
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <Filter searchTerm={searchTerm} onChange={handleSearchTerm} /> 

      <h3>Add a new</h3>  
      <PersonForm onSubmit={addName} onChange={handleAddPerson} />
      
      <h2>Numbers</h2>
      <Persons list={filteredPerson} onClick={handleDeletePerson} />
    </div>
  );
}

export default App;
