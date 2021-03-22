import React from 'react';

const Course = ({part}) => {
  return (
    <li>{part.name} {part.exercises} </li>
  )
}

const Content = ({parts} ) => {        
  return(
    <>
      {parts.map( part =>
        <Course key={part.id} part={part} />
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
    const course = {
        name: 'Half Stack application development' ,
        id: 1,
        parts: [
            {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
            },
            {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
            },
            {
            name: 'State of a component',
            exercises: 14,
            id: 3
            }
        ]
    }
     
    return (
      <div>
        <Header course={course} />
        <Content parts={course.parts} />       
        <Total parts={course.parts} />
      </div>
    )
  }

  export default App