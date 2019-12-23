import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const DisplayAnecdote = ({text}) => (
    <>
        <p>{text}</p>
    </>
)

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]


  
const App = (props) => {
  const [selected, setSelected] = useState(0)
  //I hardCoded the fisical dimension of tne votes array. A terrible idea but
  //didn`t got the time to sort it up 
  const [votes, setVote] = useState([0,0,0,0,0,0 ])


console.log(votes)
  //the event Handlers
  const generateRandomNum = () => {
      setSelected(parseInt(Math.random() * 6))
  }  

  const voteAnecdote = () => {
        console.log(votes)
        const aux = votes
        aux[selected]++ 
        setVote(aux)
  }

  return (
    <>
        <DisplayAnecdote text={props.anecdotes[selected]}/>
        <p>has {votes[selected]} votes</p>
        <button onClick={voteAnecdote}>vote for me!</button>
        <button onClick={generateRandomNum}>Click for a random anecdote!</button>
    </>
)
}


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)