import React, { useState } from 'react'

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  })
  const [mostVoted, setMostVoted] = useState(0)
  const randomQuote = () => {
    setSelected(Math.floor(Math.random() * 7));
  }

  const vote = ()  => {
    const voteCopy = {
      ...points, 
      [selected]: points[selected] + 1,
    };
    setPoints(voteCopy);
    for (let i = 0; i < 7; i++) {
      if (voteCopy[selected] > points[mostVoted]) {
        setMostVoted(selected)
      }
    }
  }

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{anecdotes[selected]}</p>
      <p>The quote has {points[selected]} points</p>
      <Button text = {'Next Anecdote'} handleClick={randomQuote}/>
      <Button text = {'Vote'} handleClick={vote} />
      <h1>Anecdote with the Most Votes</h1>
      <p>{anecdotes[mostVoted]}</p>
      <p>The quote has {points[mostVoted]} points</p>
    </div>
  )
}

export default App
