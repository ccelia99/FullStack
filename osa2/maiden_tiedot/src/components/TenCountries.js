import React, {useState} from 'react'
import Country from './Country'

const TenCountries = ({ note }) => {

    const [clicked, setClicked] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        console.log('nappia painettu')
        console.log('clicked', clicked)
        setClicked(true) 
        console.log('clicked', clicked)
        return ( clicked   )

    }
    
    return (
       <>
       <li> 
            {note.name}
            <button onClick={handleClick}>
                Show
            </button>
            <div> {clicked && <Country key={note} note={note} />}</div>
           
        </li>
        
        </>
        
    )
}
export default TenCountries