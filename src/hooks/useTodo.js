import { useAuth0 } from '@auth0/auth0-react'

function useTodo () {
  const { getAccessTokenSilently } = useAuth0()

  const { REACT_APP_SERVER_URL } = process.env

  const addTodo = async ({ topic, details }) => {
    try {
      const token = await getAccessTokenSilently()
      const userID = window.localStorage.getItem('userID')

      const response = await fetch(`${REACT_APP_SERVER_URL}/todo/create/${userID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ topic, details })
      })

      const data = await response.json()
      console.log('Todo Added Succesfully', data)
    } catch (error) {
      console.error(error)
    }
  }

  const getAllTodo = async () => {
    try {
      const token = await getAccessTokenSilently()
      const userID = window.localStorage.getItem('userID')

      const response = await fetch(`${REACT_APP_SERVER_URL}/todo/${userID}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      const data = await response.json()
      return data
    } catch (error) {
      console.error(error)
    }
  }

  return {
    addTodo, getAllTodo
  }
}

export default useTodo
