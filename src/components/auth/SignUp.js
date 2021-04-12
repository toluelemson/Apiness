import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {

  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' />
    return (
	<div>
      <div className="container">
		  <div class="card-body"><h5 class="card-title">Sign Up</h5>
			<form class="" onSubmit={this.handleSubmit}>
				<div class="form-row">
					<div class="col-md-6">
						<div class="position-relative form-group"><label htmlFor="email" class="">Email</label><input name="email"id='email' placeholder="Enter Email" type="email" class="form-control" onChange={this.handleChange}/> </div>
					</div>
					<div class="col-md-6">
						<div class="position-relative form-group"><label htmlFor="password" class="">Password</label><input name="password" id='password' placeholder="Enter password" type="password" class="form-control" onChange={this.handleChange} /></div>
					</div>
				</div>
				<div class="position-relative form-group">
					<label htmlFor="firstName" class="">First Name</label>
						<input name="firstName" id='firstName' placeholder="Your first Name" type="text" class="form-control" onChange={this.handleChange} />
				</div>
				<div class="position-relative form-group">
					<label htmlFor="lastName" class="">Last Name</label>
						<input name="lastNAME"  id='lastName' placeholder="Your Last Name" type="text" class="form-control" onChange={this.handleChange} />
				</div>
				<button class="mt-2 btn btn-primary">Sign Up</button>
				<div className="center red-text">
					{ authError ? <p>{authError}</p> : null }
				</div>
			</form>
          </div>
		</div>
	</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)