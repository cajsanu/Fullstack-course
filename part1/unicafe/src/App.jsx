import { useState } from 'react'
import './App.css'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.all > 0)
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text="Good" value={props.good}/>
            <StatisticLine text="Neutral" value={props.neutral}/>
            <StatisticLine text="Bad" value={props.bad}/>
            <StatisticLine text="All" value={props.all}/>
            <StatisticLine text="Average" value={props.average}/>
            <StatisticLine text="Positive" value={props.positives}/>
          </tbody>
        </table>
      </div>
    )
  return "No feedback given"
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    console.log("G")
    setGood(good + 1)
  }

  const handleClickNeutral = () => {
    console.log("N")
      setNeutral(neutral + 1)
  }

  const handleClickBad = () => {
    console.log("B")
      setBad(bad + 1)
  }

  const all = good+neutral+bad
  const average = (good+(-bad))/all
  const positives = (good/all)*100

  return (
    <div>
      <h1>Give feedback</h1>
      <div className='buttons'>
        <Button onClick={handleClickGood} text="good"/>
        <Button onClick={handleClickNeutral} text="neutral"/>
        <Button onClick={handleClickBad} text="bad"/> 
      </div>
      <h1>Statistics</h1>
      <div>
        <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positives={positives}/>
      </div>
    </div>
      
  )
}

export default App