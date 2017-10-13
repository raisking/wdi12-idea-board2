import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SignUpForm from './SignUpForm'
import styled from 'styled-components'

const Wrapper= styled.div`
border: 1px solid #fff;
background-color: #3b68af;
color: #fff;
padding: 30px;
width: 80%;
`

const UserNameCss= styled.div`

background-color: #6480ad;
padding: 20px 50px 20px 20px;
border-radius: 10px;

`


class LogInPage extends Component {
  state = {
    users: []
  }

  componentWillMount () {
    this.getAllUsers()
  }

  getAllUsers = async () => {
    const res = await axios.get('/api/users')
    this.setState({users: res.data})
  }

  render () {
    return (
      <Wrapper>
      <div>
        <h1>Log-In</h1>
        <h3>Please Select an Existing User</h3>
        <UserNameCss>
        <div>
        {this.state.users.map(user => {
          return (<Link key={user._id} to={`/idea/${user._id}`}>
          {user.userName}</Link>)
        })}
      </div>
      </UserNameCss>
        <SignUpForm />
      </div>
      </Wrapper>
    )
  }
}

export default LogInPage