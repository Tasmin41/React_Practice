import React from 'react'
import { Link ,NavLink} from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='route-nav'>
      <NavLink to="/" className='nav-link'>Home</NavLink>
      <NavLink to="/blogs" className='nav-link'>Blogs</NavLink>
      <NavLink to="/user" className='nav-link'>user</NavLink>
      <NavLink to="/protected" className='nav-link'>Protected Page</NavLink>
      <NavLink to="/contact" className='nav-link'>Contact</NavLink>
    </nav>
  )
}
export default Nav
