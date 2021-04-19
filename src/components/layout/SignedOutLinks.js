import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const SignedOutLinks = () => {
	const classes = useStyles();
  return (
    <div>
      <ul class="nav nav-justified">
        <li class="nav-item"><NavLink to='/signup' className={classes.menuButton}>Signup</NavLink></li>
		 	<li class="nav-item"> {"  "} </li>
			 <li class="nav-item"> {"  "} </li>
        <li class="nav-item"><NavLink to='/signin' className={classes.menuButton}>Login</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks