import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createMoment } from '../../store/actions/momentActions'
import { Redirect } from 'react-router-dom'

class CreateMoment extends Component {
  state = {
    title: '',
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createMoment(this.state);
    // this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="container mt-5 card">
		<div class="main-card mb-3">
			<div class="card-body">
				<form class="" onSubmit={this.handleSubmit}>
					<div class="position-relative form-group"><label for="text" class=""> Say something</label><input name="text" id="title" placeholder="Share your happiness" type="text" class="form-control" onChange={this.handleChange} /></div>
					{/* <div class="position-relative form-group"><label for="exampleText" class="">Say something...</label><input name="text" id="content" placeholder="Share your happiness" type="text-area" class="form-control" onChange={this.handleChange}></input></div> */}
					<button class="mt-1 btn btn-primary">Share</button>
				</form>
			</div>
		</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createMoment: (moment) => dispatch(createMoment(moment))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateMoment)
