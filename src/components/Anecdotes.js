import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const Anecdotes = (props) => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(({ filter, anecdotes }) => {
    if (!filter) {
      return anecdotes
    }

    return anecdotes.filter((a) => a.content.toLowerCase().includes(filter))
  })

  const vote = (id) => {
    dispatch(voteAnecdote(id))
    dispatch(
      setNotification(
        `Voted for "${anecdotes.find((a) => a.id === id).content}"`,
        5
      )
    )
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
