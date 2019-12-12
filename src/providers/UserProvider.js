import React from 'react';

const UserContext = React.createContext()

export const UserConsumer = UserContext.Consumer

class UserProvider extends React.Component {
  state = { 
    username: 'dudeGuy223',
    firstName: 'Dude',
    lastName: 'Guy',
    email: 'dudeguy@test.com', 
    seatPreference: 'window',
  }

  render() {
    return (
      <UserContext.Provider value = {this.state}>
        { this.props.children }
      </UserContext.Provider>
    )
  }
}

export default UserProvider;