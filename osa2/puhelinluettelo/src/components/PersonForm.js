import React from 'react'

const PersonAdd = (props) => (
    <div>
        {props.text}:<input type='text' name={props.name} value ={props.value} onChange={props.onChange}  />
    </div>
  )

const Button = (props) => (
<button onClick={props.onClick}>
    {props.text}
</button>
)
  
const PersonForm = (props) => {
return (
<form onSubmit={props.onSubmit}>
    <PersonAdd text='Name' value ={props.value} name='name' onChange={props.onChange }  />
    <PersonAdd text='Number' value={props.value} name='number' onChange={props.onChange }  />      
    <Button text='Add' />
</form>
)}

export default PersonForm