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


const Statistics = ({good, neutral, bad, all}) => {
    
    if (all === 0){
        return (
            <>
                <h2>statistics</h2>
                <p>No feedback given </p>
            </>
        )
    }
    
    return (
        <>
            <h2>statistics</h2>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {all}</p>
            <p>average {(1 * good + (-1) * bad) / all}</p>
            <p>positive {good * 100 / all }%</p>    
        </>
    )
    }



const App = (props) => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad 

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
        <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)