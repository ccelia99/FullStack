import React from 'react'

const ListLanguages = ({note}) => {
    const list = note.languages.map( l =>
         <li key={l.name}>{ l.name}</li>
     )    
     
    console.log('mapping languages ', note.languages)
    return (<ul>{list}</ul>)
    }

export default ListLanguages