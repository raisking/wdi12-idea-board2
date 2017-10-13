import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Wrapper= styled.div`
background-color: #3b68af;
color: #000;
padding: 30px;
width: 80%;
`

const UserNameCss= styled.div`
background-color: #6480ad;

color: #000;
padding: 10px;
`

class SignUpForm extends Component {
  state = {
    newUser: {
      userName: '',
      password: ''
    }
  }

  handleChange = (event) => {
    const attribute = event.target.name
    const updateUser = {...this.state.newUser}
    updateUser[attribute] = event.target.value
    this.setState({newUser: updateUser})
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const res = await axios.post('/api/users', {
      'user': this.state.newUser
    })
    console.log(res.data)
  }

  render () {
    return (
      <Wrapper>
      <div>
        <h1>Sign-Up</h1>
        <form onSubmit={this.handleSubmit}>
        <UserNameCss>
          <div>
            <label htmlFor="userName">User Name</label>
            <input
              onChange={this.handleChange} name="userName"
              type="text" value={this.state.newUser.userName}
            />
          </div>
          </UserNameCss>
          <UserNameCss>
          <div>
            <label htmlFor="password">Password</label>
            <input onChange={this.handleChange}
              value={this.state.newUser.password}
              name="password" type="text" />
          </div>
          </UserNameCss>
          <UserNameCss>
          <button>Sign Up</button>
          </UserNameCss>
        </form>
      </div>
      </Wrapper>
    )
  }
}

export default SignUpForm
