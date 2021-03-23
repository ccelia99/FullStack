import React from 'react';

const Part = ({part}) => {
  return (
    <li>{part.name} {part.exercises} </li>
  )
}

const Content = ({parts} ) => {        
  return(
    <>
      {parts.map( part =>
        <Part key={part.id} part={part} />
        ) }           
    </>            
  )
}

const Header = ({course}) => {
  return (
      <h1>{course.name}</h1>
  )
}   

const Total = ({parts}) => {
  return(
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
  )
}


const App = () => {
    
     
    return (
      <div>
        <Header course={course} />
        <Content parts={course.parts} />       
        <Total parts={course.parts} />
      </div>
    )
  }

  export default App