import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const DisplayAnecdote = ({text}) => (
    <>
        <h1>Anecdote of the day</h1>
        <p>{text}</p>
    </>
)

const DisplayMostVotedAnecdote = ({text}) => (
    <>
        <h1>Anecdote with most votes</h1>
        <p>{text}</p>
    </>
)

const Button = ({onClick, text}) => (
    <>
        <button onClick={onClick}>{text}</button>
    </>
)

  
const App = (props) => {
  const [selected, setSelected] = useState(0)
  //I hardCoded the fisical dimension of tne votes array. A terrible idea but
  //didn`t got the time to sort it up 
  const [votes, setVote] = useState([0,0,0,0,0,0 ])


  //obtain the index of the most voted anecdote
  const max = votes.indexOf(Math.max(...votes))


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
        <Button onClick={voteAnecdote} text='vote for me!' />
        <Button onClick={generateRandomNum} text='Click for a random anecdote!' />
        <DisplayMostVotedAnecdote text={props.anecdotes[max]} />
    </>
)
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)