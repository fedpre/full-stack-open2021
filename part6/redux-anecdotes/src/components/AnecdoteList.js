import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote, sortAnecdotes } from '../reducers/anecdoteReducer'

const Anecdote = ({ id, content, votes, handleVote }) => {
    return (
        <div key={id}>
          <div>
            {content}
          </div>
          <div>
            has {votes}
            <button onClick={() => handleVote(id)}>vote</button>
          </div>
        </div>
    )
}

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteAnecdote(id))
    dispatch(sortAnecdotes())
  }
  return (
    <div>
        {anecdotes.map(anecdote =>
            <Anecdote 
                key={anecdote.id}
                id={anecdote.id}
                content={anecdote.content}
                votes={anecdote.votes}
                handleVote={vote}
            />
        )}
    </div>
  )
}

export default AnecdoteList