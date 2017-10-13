import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'


const Wrapper= styled.div`
    background-color: #ccc;
    color: #fff;
    padding: 30px;
    width: 80%;
`
const Name= styled.div`
background-color: #cff;
padding: 30px;
color: #000;

`
const MainBody= styled.div`
background-color: #000;
padding: 30px;
color: #fff;
`
class IdeaPage extends Component {
  state={
    user: {
      userName: '',
      password: '',
      ideas: []
    }
  }

  async componentWillMount () {
    const { userId } = this.props.match.params
    const res = await axios.get(`/api/users/${userId}`)
    this.setState({user: res.data})
  }

  render () {
    return (
        <Wrapper>
      <div>
          <Name>
        <h1>{this.state.user.userName}'s Idea Board</h1>
        </Name>
        <MainBody>
        {this.state.user.ideas.map((idea) => {
          return (
            <div key={idea._id}>
              <h3>{idea.title}</h3>
              <p>{idea.description}</p>
            </div>
          )
        })}
        </MainBody>
      </div>
      </Wrapper>
    )
  }
}

export default IdeaPage
