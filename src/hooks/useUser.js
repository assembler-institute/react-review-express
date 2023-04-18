import { useAuth0 } from '@auth0/auth0-react'
const { REACT_APP_SERVER_URL } = process.env

function useUser () {
  const { user } = useAuth0()

  const checkUser = async () => {
    const response = await fetch(`${REACT_APP_SERVER_URL}/user/check`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: user.email, name: user.name, picture: user.picture })
    })

    return await response.json()
  }
  return {
    checkUser
  }
}

export default useUser
