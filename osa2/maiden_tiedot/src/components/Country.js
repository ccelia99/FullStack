import React from 'react'
import ListLanguages from './ListLanguages'
import WeatherData from './WeatherData'



const Country = ({note}) => {

    let countryFlag = note.flag           
    console.log('flag', countryFlag)  

    return (      
        <>
            <h1>{note.name}</h1>
            <div>Capital {note.capital} </div>
            <div>Population {note.population} </div>
            <h2>Languages</h2>
            <div>
                {note && <ListLanguages note={note} />}
            </div>
            <div>
                {<img src={countryFlag} width='100' alt='new' /> }
            </div> 
            <div>
                {note && <WeatherData note={note} />}
            </div>                         
        </>
    )
}
export default Country

