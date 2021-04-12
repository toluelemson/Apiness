import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
const MomentDetails = (props) => {
  const { moment, auth } = props;
  if (!auth.uid) return <Redirect to='/signin' />
  if (moment) {
    return (
      <div className="container section project-details">

		<div className="main-card m-3 card">
            <div className="card-body"><h5 class="card-title">{moment.title.slice(0, 30)}</h5>
			<p>{moment.title}</p>
            <div className="card-footer">
				Posted by {moment.authorFirstName} {moment.authorLastName}
			</div>
        </div>
    </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading moment...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const moments = state.firestore.data.moment;
  const moment = moments ? moments[id] : null
  return {
    moment: moment,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'moment'
  }])
)(MomentDetails)
