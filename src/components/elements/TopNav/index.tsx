import { useAuth } from '@components/appProviders/Auth'
import { APP_ROUTES } from '@root/appRoutes'
import * as React from 'react'
import { Link } from 'react-router-dom'

const TopNav: React.FC = () => {
  const { user, logOut } = useAuth()

  return user ? (
    <div>
      <div>
        <Link to={APP_ROUTES.authenticated.dashboard}>Logo</Link>
      </div>

      <div>
        <Link to={APP_ROUTES.authenticated.dashboard}>Dashboard</Link>
      </div>

      <div>
        <Link to={APP_ROUTES.authenticated.dashboard}>Calendar</Link>
      </div>

      <div>
        <Link to={APP_ROUTES.authenticated.account}>Account</Link>
      </div>

      <div>
        <div style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={logOut}>
          Logout
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div>
        <Link to={APP_ROUTES.global.home}>Logo</Link>
      </div>

      <div>
        <Link to={APP_ROUTES.global.home}>Home</Link>
      </div>

      <div>
        <Link to={APP_ROUTES.unauthenticated.login}>Login</Link>
      </div>
      <div>
        <Link to={APP_ROUTES.unauthenticated.signup}>Sign Up</Link>
      </div>
    </div>
  )
}

export default TopNav
