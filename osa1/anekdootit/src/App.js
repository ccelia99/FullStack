//React does not update the state immediately.
//the first clinking goes wrong
//"setMostVoted" in function "findMostVoted" don't manage to set "index" state
//and if I change it so that "max" state is set first, the index will be updated, but
//not max.
//I checked some solutions, but didn't find anything fast ans simple, so I just notice the
//issue here.

import React, {useState} from 'react'

const Button = (props) => 
  <button onClick={props.onClick}>
    {props.text}
  </button>

const Display = props => 
  <>
    <div>{props.text}</div>
    <div>has {props.vote} votes</div>
  </>
const DisplayHeader = props => <h1>{props.text}</h1>


const App = props => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  
  const [selected, setSelected] = useState(0)  
  const [mostVoted, setMostVoted]  = useState({max: 0, index: 0})  
  const [voteArray, setVoteArray] = useState(Array(6).fill(0))


  //valitaan random-anekdootti anekdotes-taulukosta
  //ja talletetaan se selected-muuttojan arvoksi
  const setAnecdote = () => {
    const randNum = Math.floor(Math.random() * 6)
    setSelected(randNum)    
  }


  //lisataan voteArray taulukkoon uusi vote-arvo
  const setVote = (selected) => {   
    
    const copyArray = [...voteArray]     
    copyArray[selected] += 1
    setVoteArray(copyArray)  

    findMostVoted()
  }

  //etsitaan voteArraysta suurin arvo
  const findMostVoted = () => {       
    const copyArray = [...voteArray]
    let maxV=0, indexV=0

    for (let i=0; i<copyArray.length; i++) {
      if (copyArray[i] > maxV) {
        maxV = copyArray[i]
        indexV = i
      }
    }
    
    setMostVoted({...mostVoted, index: indexV})
    setMostVoted({...mostVoted, max: maxV})

    console.log('index V ', indexV)    
    console.log('index ', mostVoted.index)    
    console.log('max V ', maxV)    
    console.log('max ', mostVoted.max)  
  }

  return (
    <div>
      <DisplayHeader text='Anecdote of the day' />      
      <Display text={anecdotes[selected]} vote={voteArray[selected]} /> 
      <Button onClick={() => setVote(selected)} text='vote'/>
      <Button onClick={() => setAnecdote()} text='next anecdote'/>  
      <DisplayHeader text='Anecdote with most votes' /> 
      <Display text={anecdotes[mostVoted.index]} vote={mostVoted.max} />        
    </div>
  );
}
export default App;

