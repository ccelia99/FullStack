//React ei paivita kenttaa all heti, joten average ja positive laskut menevat ekasta
//klikkauksesta pieleen

import React, {useState} from 'react'

const DisplayHeader = props => <h1>{props.text}</h1>

const Display = props => <div>
  <div>
    <p>{props.text} {props.value}</p>   
  </div>
</div>

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)


const App = props => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [all, setAll] = useState(0)
  const [average, setAverage]  = useState(0)
  const [positive, setPositive] = useState(0)

  const setValues = (value) => { 
    
    if (value >= 0) {
      setGood(good+1)
      console.log('good')
      console.log(good)
    }
    else if (value <= 0){
      setBad(bad+1)
      console.log('bad')
      console.log(bad)
    }
    else {
      setBad(neutral+1)
      console.log('neutral')
      console.log(neutral)
    }

    setAll(all+1)
    
    console.log('all')
    console.log(all)
    
    console.log('average')
    console.log(average)

    setAverage((good-bad)/all)
    console.log('new average')
    console.log(average)   
    
    setPositive(good*100/all)
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
      <Display text='all' value={all} />
      <Display text='average' value={average} />
      <Display text='positive' value={positive} />

    </div>
  );
}

export default App;
