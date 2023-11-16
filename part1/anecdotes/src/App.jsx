import { useState } from 'react'
import './App.css'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))


  const handleClickRandom = () => {
    console.log("Click")
    return (
      setSelected(Math.floor(Math.random() * anecdotes.length))
    )
  }

  const handleClickVote = () => {
    const copyOfVotes = [...votes]
    copyOfVotes[selected] += 1
    return (
      setVotes(copyOfVotes)
    )
  }

  console.log(votes)

  const mostVoted = () => {
    const max = Math.max(...votes)
    const i = votes.indexOf(max)
    const x = votes.filter(x => x==max).length
    console.log("x is", x)
    if (max === 0)
      return "no votes"
    if (x > 1)
      return `${x} have the same number of votes`
    return (anecdotes[i])
  }
    
  const voteWord = () => {
    if (votes[selected] === 1)
      return "vote"
    return "votes"
  }

  return (
    <div>
      <h1>Anecdote fo the day</h1>
      <h2>{anecdotes[selected]}</h2>
      <h2>has {votes[selected]} {voteWord()}</h2>
      <Button handleClick={handleClickVote} text="vote" />
      <Button handleClick={handleClickRandom} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <h2>{mostVoted()}</h2>
    </div>
  )
}

export default App