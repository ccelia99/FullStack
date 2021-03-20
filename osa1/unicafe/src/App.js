//React ei paivita kenttaa all heti, joten average ja positive laskut menevat ekasta
//klikkauksesta pieleen

import React, {useState} from 'react'


const DisplayHeader = props => <h1>{props.text}</h1>

const Display = props => 
  <div>{props.text} {props.value}</div>

const Statistics = props =>   {
  if (props.value === 0) {
    return(
      <div>No feedback given</div>
    )
  }
  return (
    <div><p>{props.text} {props.value}</p></div>
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

  
  const setValues = (value) => { 
    
    if (value > 0) {
      setGood(good+1)
      console.log('good: ', good)
    }
    else if (value < 0){
      setBad(bad+1)
      console.log('bad: ', bad)
    }
    else {
      setNeutral(neutral+1)
      console.log('neutral: ', neutral)
    }

    setStatics({...statics, 
      all: statics.all+1, 
      average: (good-bad)/statics.all, 
      positive: good*100/statics.all })
      console.log('all: ', statics.all)
      console.log('average: ', statics.average)
      console.log('positive: ', statics.positive)
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

      <Statistics text='all' value={statics.all} />
      <Statistics text='average' value={statics.average} />
      <Statistics text='positive' value={statics.positive} />    

    </div>
  );
}

export default App;
