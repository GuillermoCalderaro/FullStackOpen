import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
        <button onClick={onClick}>
            {text}
        </button>
)

const DisplayHeader = ({text}) => (
    <>
        <h1>{text}</h1>
    </>
)


const Statistics = ({good, neutral, bad }) => {
    const all = good + neutral + bad 
    const avg = (1 * good + (-1) * bad) / all
    const positivePercentage = good * 100 / all

    if (all === 0){
        return (
            <>
                <p>No feedback given </p>
            </>
        )
    }

    return (
        <>
            <Statistic text='good' value={good}/>
            <Statistic text='neutral' value={neutral}/>
            <Statistic text='bad' value={bad}/>
            <Statistic text='all' value={all}/>
            <Statistic text='average' value={avg}/>
            <Statistic text='positive percentage' value={positivePercentage} />     
        </>
    )
}

const Statistic = ({text, value}) => (
    <>
        <p>{text} {value}</p>
    </>
)


const App = (props) => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  //here comes the event handlers
  const handleGoodClick = () => setGood(good + 1)
  

  const handleNeutralClick = () => setNeutral(neutral + 1)
    

  const handleBadClick = () => {( setBad(bad + 1))}
  
  // podria modularizarlas, haciendo una sola funcion que incremente en 1 el parametro recivido...
  //podria llamarse handleClick(value) pero deberia devolver otra funcion


  return (
    <div>
        <DisplayHeader text='Give Feedback'/>
        <Button onClick={handleGoodClick} text='good'/>
        <Button onClick={handleNeutralClick} text='neutral'/>
        <Button onClick={handleBadClick} text='bad'/>
        <DisplayHeader text='statistics'/>
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)