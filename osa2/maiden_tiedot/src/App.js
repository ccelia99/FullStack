import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CountryList from './components/CountryList'
import Filter from './components/Filter'

function App() {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountires] = useState([''])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  console.log('render', countries.length, 'countries')

  useEffect( () => { 
    const results = countries.filter( p =>
      p.name.toLowerCase().includes(searchTerm) )
      
    console.log('tulosArray ', results)
    console.log('countries ', countries)

    setFilteredCountires(results)
  },[searchTerm, countries] )

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div >
      <Filter searchTerm={searchTerm} onChange={handleSearchTerm} /> 
      {countries && <CountryList list={filteredCountries} />}
    </div>
  );
}

export default App;
