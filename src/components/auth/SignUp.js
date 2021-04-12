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
                                                    <div class="position-relative form-group"><label htmlFor="email" class="">Email</label><input name="email"id='email' placeholder="with a placeholder" type="email" class="form-control" onChange={this.handleChange}/> </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="position-relative form-group"><label htmlFor="password" class="">Password</label><input name="password" id='password' placeholder="password placeholder" type="password" class="form-control" onChange={this.handleChange} /></div>
                                                </div>
                                            </div>
                                            <div class="position-relative form-group"><label htmlFor="firstName" class="">First Name</label><input name="firstName" id='firstName' placeholder="Enter First Name" type="text" class="form-control" onChange={this.handleChange} /></div>
                                            <div class="position-relative form-group"><label htmlFor="lastName" class="">Address 2</label><input name="lastNAME"  id='lastName' placeholder="Enter Last Name" type="text" class="form-control" onChange={this.handleChange} />
                                            </div>
                                            <button class="mt-2 btn btn-primary">Sign Up</button>
											<div className="center red-text">
              { authError ? <p>{authError}</p> : null }
            </div>
                                        </form>
                                    </div>
        {/* <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id='firstName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id='lastName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
            <div className="center red-text">
              { authError ? <p>{authError}</p> : null }
            </div>
          </div>
        </form> */}
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
