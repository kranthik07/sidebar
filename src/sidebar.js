import React from 'react';
import styled from 'styled-components';


const Navigation = styled.div`
  position: fixed;
  width: 20%;
  height: 100vh;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  position: absolute;
  
  padding-top:0px;

`;

const Nav = styled.div`

display:flex;
flex-direction:column;
text-align:center;
height:100vh;
margin-top:80px;



`;

const List = styled.ul`


  background:lightblue;


`;

const NavLink = styled.div`
display:flex;
flex-direction:column;
background:blue;
height:50px;

a{
  margin-top:20px;
  color:white;
}
`;

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


const Sidebar = (props) =>{
    return(
        <Navigation>
<Nav>
          <NavLink> <div style={{ display: 'flex', flexDirection: 'column' }}>  <a onClick={ props.click}>About </a></div></NavLink>

          <List style={{ display: props.isopened ? 'block' : 'none' }} >
            <li>HTMl</li>
            <li>CSS</li>
            <li>javascript</li>
          </List>

          <NavLink>     <a >Services</a></NavLink>
          <NavLink>    <a >Clients</a></NavLink>
          <NavLink>   <a >Contact</a></NavLink>

          </Nav>
        </Navigation> 
    )
}

export default Sidebar;