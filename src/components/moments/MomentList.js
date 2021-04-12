import React from 'react'
import MomentSummary from './MomentSummary'
import { Link } from 'react-router-dom'

const MomentList = ({moment}) => {
  return (
    <div className="">
      { moment && moment.map(detailedmoment => {
        return (
          <Link to={'/moment/' + detailedmoment.id} key={detailedmoment.id}>
            <MomentSummary detailedmoment={detailedmoment} />
          </Link>
        )
      })}
    </div>
  )
}

export default MomentList
