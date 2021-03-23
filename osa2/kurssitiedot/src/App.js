import React from 'react';


const Course = ({course}) => {
  console.log('props course', course.name) 
  return (    
    <>
      <Header course={course} />
      <Content parts={course.parts} />       
      <Total parts={course.parts} /> 
    </>   
  )
}

const Header = ({course}) => {
  return (
      <h1>{course.name}</h1>
  )
}  

const Content = ({parts} ) => {        
  return (
    <>
      {parts.map( part =>
        <Part key={part.id} part={part} />
        ) }           
    </>            
  )
}

const Part = ({part}) => {
  return (
    <li> {part.name} {part.exercises} </li>
  )
}

const Total = ({parts}) => {

  const result = parts.reduce( (part, item)  => {
    return part + item.exercises
  } , 0)

  return (
    <>
    <p><b>Total of exercises {result} </b></p> 
    </>
 
  )}

const App = ({course} ) => {
  
    return (
      <div>
        <Course course={course} />        
      </div>
    )
  }

  export default App