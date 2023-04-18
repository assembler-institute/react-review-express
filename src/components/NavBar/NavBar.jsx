import { Link, useLocation } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import './style.css'

function NavBar () {
  const { logout, isAuthenticated } = useAuth0()
  const { pathname } = useLocation()

  return (
    <ul style={{ display: 'flex', gap: '3rem', listStyle: 'none', width: '90%', justifyContent: 'flex-end' }}>
      {pathname === '/' && <li> <Link to='/'>LOGIN </Link></li>}
      <li> <Link to='/home'>HOME</Link></li>
      <li> <Link to='/settings'>SETTINGS</Link></li>
      {isAuthenticated && <li onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='logout_button'>LOGOUT</li>}
    </ul>
  )
}

export default NavBar
