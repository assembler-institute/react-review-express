import { useAuth0 } from '@auth0/auth0-react'
function Settings () {
  const { user } = useAuth0()

  return (
    <div>
      <h1>Settings</h1>
      <h2>Account Information</h2>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <img style={{ height: '60px' }} src='https://cdn-icons-png.flaticon.com/512/6062/6062510.png' alt={user.name} />
        <div>
          <p>Username: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </div>
  )
}

export default Settings
