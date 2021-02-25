import React, { useState } from 'react';
import styled from 'styled-components';
import Profile from './profile';
import Sidebar from './sidebar';




const Wrapper = styled.div`
display:flex;
flex-direction:row;


`;
const ProfilePicture = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-right:20px;
  background-color:blue;
  margin-top:10px;
`;


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
  }
  handleClick = (e) => {
    console.log("am here");
   
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  navRef = React.createRef();
  render() {
    return (
      <Wrapper>
        <Profile isopened= {this.state.isToggleOn} click={this.handleClick}/>
        <Sidebar isopened= {this.state.isToggleOn}  click={this.handleClick}/>
        
      </Wrapper>
    )
  }
}

export default App;

