import React from 'react';
import { Form, } from 'semantic-ui-react';
import { UserConsumer, } from '../providers/UserProvider';

class UserForm extends React.Component {
  state = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    seatPreference: '',
  }

  handleChange = (e, { name, value, }) => this.setState({[name]: value}) 

  handleSubmit = (e) => {
    e.preventDefault()
    const user = { ...this.state, }
    this.props.updateUser(user)
  }

  render() {
    const { username, firstName, lastName, email, seatPreference, } = this.state 

    return (
      <Form onSubmit={this.handleSubmit}>
         <Form.Input 
          label='Username'
          type='text'
          name='username'
          value={username}
          onChange={this.handleChange}
         />
         <Form.Input 
          label='First Name'
          type='text'
          name='firstName'
          value={firstName}
          onChange={this.handleChange}
         />
         <Form.Input 
          label='Last Name'
          type='text'
          name='lastName'
          value={lastName}
          onChange={this.handleChange}
         />
         <Form.Input 
          label='Email'
          type='email'
          name='email'
          value={email}
          onChange={this.handleChange}
         />
         <Form.Select 
          label='Seat Preference'
          name='seatPreference'
          options={seatOptions}
          value={seatPreference}
          onChange={this.handleChange}
         />
        <Form.Button color='blue'>Save</Form.Button>
      </Form>
    )
  }
}

const seatOptions = [
  {key: 'w', text: 'Window', value: 'window'},
  {key: 'a', text: 'Aisle', value: 'aisle'},
  {key: 'm', text: 'Middle', value: 'middle'},
]

const ConnectedUserForm = (props) => {
  return (
    <UserConsumer>
      { value => (
        <UserForm 
          {...props}
          username={value.username}
          firstName={value.firstName}
          lastName={value.lastName}
          emmail={value.emmail}
          seatPreference={value.seatPreference}
          updateUser={value.updateUser}
        />
      )}
    </UserConsumer>
  )
}

export default ConnectedUserForm;