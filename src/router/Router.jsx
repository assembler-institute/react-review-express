import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Login, Settings } from '../pages'
import { NavBar } from '../components'
import { useAuth0 } from '@auth0/auth0-react'

function Router () {
  const { isLoading } = useAuth0()

  if (isLoading) {
    return <p>Loading</p>
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
