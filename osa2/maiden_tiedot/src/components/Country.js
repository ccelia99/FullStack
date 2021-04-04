import React from 'react'

const ListLanguages = ({note}) => {
   const list = note.languages.map( l =>
        <li key={l.name}>{ l.name}</li>
    )    
    
   console.log('mapping languages ', note.languages)
   return (<ul>{list}</ul>)
   }

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
        </>
    )
}
export default Country

