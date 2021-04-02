import React from 'react'
import Country from './Country'
import TenCountries from './TenCountries'

const CountryList = (props) => {
    
    let print = ''
    
    if (props.list.length > 10) {
        
        print = 'Too many matches, specify anther filter'
    }
    else 
        if (props.list.length > 1) {
            print = props.list.map( note => 
                <TenCountries key={note.name} note={note} />  
            )
        }
        else {            
            print = props.list.map( note =>
                <Country key={note.name} note={note} />  
            )          
        }

    return (
    <div>
      <ul>
        {print}
      </ul>
    </div>
  )}
  export default CountryList