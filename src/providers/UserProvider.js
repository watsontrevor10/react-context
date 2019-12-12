import React from 'react';

export const UserContext = React.createContext()

export const UserConsumer = UserContext.Consumer

class UserProvider extends React.Component {
  state = { 
    username: 'dudeGuy223',
    firstName: 'Dude',
    lastName: 'Guy',
    email: 'dudeguy@test.com', 
    seatPreference: 'window',
    updateUser: (user) => this.updateUser(user),
  }

  updateUser = (user) => {
    this.setState({ ...user, })
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