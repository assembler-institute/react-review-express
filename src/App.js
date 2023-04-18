import { Auth0Provider } from '@auth0/auth0-react'

import './App.css'
import { Router } from './router'
import TodoContextProvider from './context/TodoContext'

function App () {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: `${window.location.origin}/home`,
        audience: `${process.env.REACT_APP_AUTH0_AUDIENCE}`
      }}
    >
      <TodoContextProvider>
        <Router />
      </TodoContextProvider>
    </Auth0Provider>
  )
}

export default App
