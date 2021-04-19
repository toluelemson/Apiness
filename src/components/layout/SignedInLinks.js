import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));


const SignedInLinks = (props) => {

  const classes = useStyles();
  return (
    <div>
		<ul class="nav nav-justified">
            <li class="nav-item"><NavLink className={classes.menuButton} to='/create'>New Moment</NavLink></li>
            <li class="nav-item"><a onClick={props.signOut}>Log Out</a></li>
            <li class="nav-item"><NavLink  className={classes.menuButton} to='/' className="btn btn-floating pink lighten-1">{props.profile.initials}</NavLink></li>
        </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
