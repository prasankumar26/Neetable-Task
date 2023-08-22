import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
       <nav className='sidebar mt-5'>
        <ul>
        <li>
            <Link to="/" className='btn bg-danger w-100 mb-2'>Box Task</Link>
        </li>
        <li>
            <Link to="/star-rating" className='btn bg-danger w-100 mb-2'>Star rating</Link>
        </li>
        <li>
            <Link to="/password-generator" className='btn bg-danger w-100 mb-2'>Password</Link>
        </li>
        <li>
            <Link to="/traffic-light" className='btn bg-danger w-100 mb-2'>Traffic Light</Link>
        </li>
        <li>
            <Link to="/todo" className='btn bg-danger w-100 mb-2'> Todo app </Link>
        </li>
        <li>
            <Link to="/debounce" className='btn bg-danger w-100 mb-2'> Debounce </Link>
        </li>
        </ul>
        </nav>
  )
}

export default Sidebar