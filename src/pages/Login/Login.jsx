import { useAuth0 } from '@auth0/auth0-react'

function Login () {
  const { loginWithRedirect } = useAuth0()

  return (
    <div>
      <h1>REACT REVIEW SESSION</h1>
      <button onClick={() => loginWithRedirect()}>LOGIN</button>
    </div>
  )
}

export default Login
