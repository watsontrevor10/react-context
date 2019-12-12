import React from 'react';
import { Form, } from 'semantic-ui-react';

class UserForm extends React.Component {
  state = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    seatPreference: '',
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value}) 
  }

  handleSubmit = (e) => {
    e.preventDefault()

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
          name='email'
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

export default UserForm;