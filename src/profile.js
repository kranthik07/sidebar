
import React from 'react';
import styled from 'styled-components';



const Header = styled.div`
width: 100%;
height:70px;
overflow:auto;
background-color:white;
display:flex;
flex-direction:row;
justify-content:space-between;

z-index: 999;

h1{
  margin-left:20px;
}
`;


const List = styled.ul`


  background:lightblue;


`;
const ProfilePicture = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-right:20px;
  background-color:blue;
  margin-top:10px;
`;


const Profile = (props) =>{
    
    return (
        <Header >
          <h1>Logo</h1>
          <ProfilePicture onClick={props.click} >
                 </ProfilePicture >
                 <List style={{ display: props.isopened ? 'block' : 'none' }}>
            <li>HTMl</li>
            <li>CSS</li>
            <li>javascript</li>
          </List>
        </Header>
    )
}

export default Profile;