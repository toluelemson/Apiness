import React from 'react'
import moment from 'moment'

const Notifications = (props) => {
  const { notifications } = props;
  return (
    <div className="section">
        <div className="main-card m-3 p-3 card">
          <span className="">Notifications</span>
          <ul className="online-users">
            { notifications && notifications.map(item =>{
              return <li key={item.id}>
                <span className="pink-text">{item.user} </span>
                <span>{item.content}</span>
                <div className="note-date grey-text">{moment(item.time.toDate()).fromNow()}</div>
              </li>
            })}
          </ul>
      </div>
    </div>
  )
}

export default Notifications


