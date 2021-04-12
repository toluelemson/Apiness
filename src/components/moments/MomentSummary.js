import React from 'react'
import moment from 'moment'

const momentSummary = ({detailedmoment}) => {
  return (
		<div className="main-card m-3 card">
            <div className="card-body"><h5 class="card-title">{detailedmoment.title.slice(0, 30)}</h5>
				<div className="card-footer">
					Posted by {detailedmoment.authorFirstName} {detailedmoment.authorLastName}
					{", "}{moment(detailedmoment.createdAt.toDate()).calendar()}
				</div>
        	</div>
    	</div>
  )
}

export default momentSummary
