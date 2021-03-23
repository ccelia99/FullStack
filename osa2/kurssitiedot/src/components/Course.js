import React from 'react';


const Course = ({course}) => { 
  return (    
    <>
      <Header course={course} />      
    </>   
  )
}

const Header = ({course}) => {
  return (
    <>
      {course.map( item  => {
        return (
          <>
            <h1>Web developmetn curriculum</h1>
            <h2><Part key={item.id} parts={item} /></h2>
            <Content parts={item.parts} />   
            <b><Total parts={item.parts} /></b>       
          </>
        )
      })}  
    </>
  )
} 

const Content = ({parts} ) => {     
  return (
    <>
      {parts.map( part =>
        <Part key={part.id} parts={part} />
        ) }           
    </>            
  )
}

const Part = ({parts}) => {
  return (
    <div> {parts.name}</div>
  )
}

const Total = ({parts}) => {

  const result = parts.reduce( (part, item)  => 
    console.log('totalin lasku', part, item ) ||
    part + item.exercises , 0
    )

  return (
    <>
      <p>Total of exercises {result} </p> 
    </> 
  )}

  export default Course
