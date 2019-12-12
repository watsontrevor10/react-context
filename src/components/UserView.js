import React, { useContext, } from 'react';
import { Card } from 'semantic-ui-react';
import { UserContext, } from '../providers/UserProvider';

const UserView = () => {
  const { username, firstName, lastName, email, seatPreference, } = useContext(UserContext)
    
  return (
    <Card>
      <Card.Content>
        <Card.Header>{firstName} {lastName}</Card.Header>
        <Card.Meta>{username}</Card.Meta>
      </Card.Content>
      <Card.Content>
        <p>Email: {email}</p>
      </Card.Content>
      <Card.Content>
        <p>Seat Preference: {seatPreference}</p>
      </Card.Content>
    </Card>
  )
}

export default UserView;