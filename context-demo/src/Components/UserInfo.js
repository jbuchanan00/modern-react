import React from 'react'
import { NavConsumer } from '../NavContext';

// we are able to completely pass over the NavBar component using context
// here we use the NavConsumer prop and any JSX witht he context data we are passed
const UserInfo = () => {
  return (
    <NavConsumer>
      {(data) => <h3>{data}</h3>}
    </NavConsumer>
  )
}

export default UserInfo