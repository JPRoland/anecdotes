import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import {
  sendNotification,
  clearNotification,
} from '../reducers/notificationReducer'

const Anecdotes = (props) => {
  const dispatch = useDispatch()
  const anecdotes = useSelector((state) => state.anecdotes)

  const vote = (id) => {
    dispatch(voteAnecdote(id))
    dispatch(
      sendNotification(
        `Voted for "${anecdotes.find((a) => a.id === id).content}"`
      )
    )
    setTimeout(() => {
      dispatch(clearNotification())
    }, 5000)
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
