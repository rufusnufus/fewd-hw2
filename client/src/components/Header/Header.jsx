import React from 'react'
import { NavLink } from 'react-router-dom'
import authService from '../../services/auth.service'
import logo from '../../images/logo.png'

import './index.css'

function Header() {
  const handleLogout = () => {
    authService.logout()
  }

  return (
    <header>
      <NavLink to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </NavLink>
      <b className="header__title">Hometask #2</b>
      {!authService.isAuthorized() ? (
        <>
          <NavLink className="header__navbar" to="/login">
            Login
          </NavLink>
          <NavLink className="header__navbar" to="/register">
            Register
          </NavLink>
        </>
      ) : (
        <NavLink className="header__navbar" to="/" onClick={handleLogout}>
          Logout
        </NavLink>
      )}
    </header>
  )
}

export default Header
