const reducer = (state = '', action) => {
  switch (action.type) {
    case 'SEND_NOTIFICATION':
      return action.data.message
    case 'CLEAR':
      return ''
    default:
      return state
  }
}

export const sendNotification = (message) => {
  return {
    type: 'SEND_NOTIFICATION',
    data: { message },
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR',
  }
}

export default reducer
