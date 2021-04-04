import React from 'react'
import Country from './Country'
import TenCountries from './TenCountries'

const CountryList = (props) => {
    
    const listLenght = props.list.length

    switch (true) {
        default :
            return (null)

        case ( listLenght === 1) :
            return (
                props.list.map( note =>
                    <Country key={note.name} note={note} />  
                )
            )
        case ( listLenght < 11) :
            return (
                props.list.map( note => 
                    <TenCountries key={note.name} note={note} />  
                )
            )
        case ( listLenght > 10) :
            return (
                'Too many matches, specify anther filter'
            )
    }
  }
  export default CountryList