import React, { Component } from 'react'
import MomentList from '../moments/MomentList'
import CreateMoment from '../moments/CreateMoment'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'



class Dashboard extends Component {
  render() {
    const { moment, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to='/home' />

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col-md-9">
			<CreateMoment />
            <MomentList moment={moment} />
          </div>
          <div className="col-md-3">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    moment: state.firestore.ordered.moment,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'moment', orderBy: ['createdAt', 'desc']},
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
  ])
)(Dashboard)
