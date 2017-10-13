import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomePage from './components/home/HomePage'
import IdeaPage from './components/idea/IdeaPage'
import LogInPage from './components/login/LoginPage'
import styled from 'styled-components'


const Wrapper= styled.div`
border: 1px solid #fff;
    display: flex;
    justify-content: center;
   background-color: #4d6387;
   height: 700px; 

`
const Items = styled.div`
border: 1px solid #fff;
  background-color: #ccc;
  text-decoration: none;
  display: inline-block;
  padding: 10px;
  margin: 20px;
  width: 60px;
  text-align: center;
  border-radius: 10px;
  font-weight: bold;
`
const ItemsA = styled.div`
border: 1px solid #fff;
background-color: #ccc;
text-decoration: none;
display: inline-block;
padding: 10px;
margin: 20px;
width: 60px;
text-align: center;
border-radius: 10px;
font-weight: bold;

`
const ItemsB = styled.div`
border: 1px solid #fff;
background-color: #ccc;
text-decoration: none;
display: inline-block;
padding: 10px;
margin: 20px;
width: 60px;
text-align: center;
border-radius: 10px;
font-weight: bold;

`


class App extends Component {
  render () {
    return (
      <Wrapper>
      <Router>
        <div>
          <div>
            <Items>
            <div>
              <Link to="/">Home</Link>
            </div>
            </Items>
            <ItemsA>
            <div>
              <Link to="/login">LogIn</Link>
            </div>
            </ItemsA>
            <ItemsB>
            <div>
              <Link to="/idea">Idea</Link>
            </div>
            </ItemsB>
          </div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LogInPage} />
            <Route exact path="/idea/:userId" component={IdeaPage} />
          </Switch>
        </div>
      </Router>
      </Wrapper>
    )
  }
}

export default App
