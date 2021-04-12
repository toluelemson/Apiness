import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      <ul class="nav nav-justified">
        <li class="nav-item"><NavLink to='/signup'>Signup</NavLink></li>
		 	<li class="nav-item"> {"  "} </li>
			 <li class="nav-item"> {"  "} </li>
        <li class="nav-item"><NavLink to='/signin'>Login</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks