const reducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.data.message
    case 'CLEAR':
      return ''
    default:
      return state
  }
}

export const setNotification = (message, duration) => {
  return async (dispatch) => {
    dispatch({ type: 'SET_NOTIFICATION', date: { message } })
    setTimeout(() => {
      dispatch(clearNotification())
    }, duration * 1000)
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR',
  }
}

export default reducer
