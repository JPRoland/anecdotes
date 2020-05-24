import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const Anecdotes = (props) => {
  const dispatch = useDispatch()
  const anecdotes = useSelector((state) => state)

  const vote = (id) => {
    dispatch(voteAnecdote(id))
  }

  anecdotes.sort((a, b) => b.votes - a.votes)

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Anecdotes