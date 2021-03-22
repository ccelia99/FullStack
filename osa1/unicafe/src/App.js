//React does not update the state immediately.
//the first clinking goes wrong

//


import React, {useState} from 'react'


const DisplayHeader = props => <h1>{props.text}</h1>

const Display = props => 
<>
  <table>
    <tbody>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>        
    </tbody>
  </table>
</>    
  

const Statistics = (props) => {    
  return (
    <>
      <table>
        <tbody>
          <tr><StatisticLine text='all' value={props.statics.all} /></tr> 
          <tr><StatisticLine text='average' value={props.statics.average} /></tr>
          <tr><StatisticLine text='positive' value={props.statics.positive} /></tr>                
        </tbody>        
      </table>
    </>
  )
}


//Presents statistics
const StatisticLine = (props) =>   {  
  if (props.value === 0) {    
    return(     
      <td>No feedback given</td>         
    )
  }  
  return (
    <>   
      <td>{props.text}</td>
      <td>{props.value}</td>
    </>    
  )
}

const Button = (props) => 
  <button onClick={props.onClick}>
    {props.text}
  </button>


const App = props => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [statics, setStatics] = useState({
    all: 0, average: 0, positive: 0
  })

  
  //set values for Good, Bad and Neutral
  const setValues = (value) => {     
    if (value > 0) {
      setGood(good+1)
    }
    else if (value < 0){
      setBad(bad+1)
    }
    else {
      setNeutral(neutral+1)
    }

    setStatisValue()
  }

  //Counts and set values for statistics
  const setStatisValue = () => {
    const allValue = statics.all+1
    setStatics({...statics, 
      all: allValue, 
      average: (good-bad)/allValue, 
      positive: good*100/allValue 
    })
  }

    
  return (
    <div>
      <DisplayHeader text='give feedback' />

      <Button onClick={() => setValues(1)} text='Good'/>
      <Button onClick={() => setValues(0)} text='Neutral' />
      <Button onClick={() => setValues(-1) } text='Bad' />

      <DisplayHeader  text='statistics' />

      <Display text='good' value={good} />
      <Display text='neutral' value={neutral} />
      <Display text='bad' value={bad} />

      <Statistics statics={statics} />      

    </div>
  );
}

export default App;
