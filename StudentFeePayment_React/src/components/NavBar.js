import React from 'react'
import './NavBar.css';


const NavBar = ({ user, setUser }) => {
  
  const logout = () => {
    window.localStorage.removeItem('loggedInUser')
    setUser(null)
  }

  
  if (!user)
    return null
  
  
  return (
    <div className='nav'>
      <nav className='navbar ' id='menu'>
       
        <button className='navbar-a'>Welcome, {user.firstName || 'User'}</button>
          
          <button className='logoutb' onClick={logout}>Logout</button>
        
      </nav>
    </div>
  )
}

export default NavBar