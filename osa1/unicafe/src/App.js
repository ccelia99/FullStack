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

  const goodSetToValue = () => { 
    console.log('good nappia painettu')
    console.log(good+1)
    setGood(good+1)
  }

  const neutralSetToValue = () => { 
    console.log('neurtal nappia painettu')
    console.log(neutral+1)
    setNeutral(neutral+1)
  }

  const badSetToValue = () => { 
    console.log('bad nappia painettu')
    console.log(bad+1)
    setBad(bad+1)
  }


  return (
    <div>
      <DisplayHeader text='give feedback' />
      <Button onClick={() => goodSetToValue()} text='Good'/>
      <Button onClick={() => neutralSetToValue()} text='Neutral' />
      <Button onClick={() => badSetToValue() } text='Bad' />
      <DisplayHeader  text='statistics' />
      <Display text='good' value={good} />
      <Display text='neutral' value={neutral} />
      <Display text='bad' value={bad} />

    </div>
  );
}

export default App;
