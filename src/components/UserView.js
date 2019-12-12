import React from 'react';
import { Card } from 'semantic-ui-react';

const UserView = () => (
  <Card>
    <Card.Content>
      <Card.Header>firstName lastName</Card.Header>
      <Card.Meta>username</Card.Meta>
    </Card.Content>
    <Card.Content>
      <p>email</p>
    </Card.Content>
  </Card>
)

export default UserView;