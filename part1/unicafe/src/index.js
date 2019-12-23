import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
        <button onClick={onClick}>
            {text}
        </button>
)

/*
        <Button onCLick={() => setGood(good + 1)} text='good'/>
        <Button onCLick={handleNeutralClick} text='neutral'/>
        <Button onCLick={handleBadClick} text='bad'/>
        
*/
const DisplayHeader = ({text}) => (
    <>
        <h1>{text}</h1>
    </>
)
/*
const DisplayData = ({good, neutral, bad, totGood, totNeutral, totBad}) => (
    <>
        <p>{good}{totGood}</p>
        <p>{neutral}{totNeutral}</p>
        <p>{bad}{totBad}</p>
    </>
)

<DisplayData good='good ' neutral='neutral ' bad='bad ' 
        totGood={good} totNeutral={neutral} totBad={bad}/>
*/


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
  //popdria llamarse handleClick(value) pero deberia devolver otra funcion

  return (
    <div>
        <DisplayHeader text='Give Feedback'/>
        <Button onClick={handleGoodClick} text='good'/>
        <Button onClick={handleNeutralClick} text='neutral'/>
        <Button onClick={handleBadClick} text='bad'/>
        <DisplayHeader text='statistics'/>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)