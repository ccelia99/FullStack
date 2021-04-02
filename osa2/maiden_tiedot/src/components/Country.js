import React from 'react'

const Country = ({note}) => {

    let countryFlag = note.flag           
    console.log('lippu', countryFlag)   
    return (
      
        <>
            <h1>{note.name}</h1>
            <div>Capital {note.capital} </div>
            <div>Population {note.population} </div>
            <h2>Languages</h2>
            <div>
                {note.languages.map( l =>
                    <li>{ l.name}</li>
                )}                      
            </div>
            <div>
                {<img src={countryFlag} width='100' alt='new' /> }
            </div>                  
        </>
    )
}
export default Country

