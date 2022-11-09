import React from 'react'
import { useState } from 'react';
import logo from '../../assets/logo2.png';
import home from '../../assets/home.svg';
import appointments from '../../assets/appointments.svg';
import records from '../../assets/draft.svg'
import graph from '../../assets/graph.svg';
import user from '../../assets/user1.svg';
import poweroff from '../../assets/poweroff.svg';
import styled from "styled-components";
import { NavLink } from 'react-router-dom'
// import { useDispatch } from 'react-redux';
// import {authenticate} from '../../Actions/Actions';
// import { useSelector } from 'react-redux';

const ButtonS = styled.button`
  background-color: var(--blue);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }
  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const SidebarContainer = styled.div`
  background-color: var(--blue);
  width: 3.5rem;
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Container = styled.div`
  position: fixed;
  .active {
    border-right: 4px solid var(--white);
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`;

const Logo = styled.div`
  width: 2rem;
  img {
    width: 100%;
    height: auto;
  }
`;

const SlickBar = styled.ul`
  color: var(--white);
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--blue);
  padding: 2rem 0;
  position: absolute;
  top: 6rem;
  left: 0;
  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;

const Item = styled(NavLink)`
  text-decoration: none;
  color: var(--white);
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  display: flex;
  padding-left: 1rem;
  &:hover {
    border-right: 4px solid var(--white);
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
  img {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`;

const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;

const Profile = styled.div`
  width: ${(props) => (props.clicked ? "14rem" : "3rem")};
  height: 3rem;
  padding: 0.5rem 1rem;
  /* border: 2px solid var(--white); */
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => (props.clicked ? "9rem" : "0")};
  background-color: var(--blue);
  color: var(--white);
  transition: all 0.3s ease;
  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      border: 2px solid var(--grey);
      padding: 2px;
    }
  }
`;

const Details = styled.div`
  display: ${(props) => (props.clicked ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    display: inline-block;
  }
  a {
    font-size: 0.8rem;
    text-decoration: none;
    color: var(--grey);
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Logout = styled.button`
  border: none;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  img {
    width: 100%;
    height: auto;
    filter: invert(15%) sepia(70%) saturate(6573%) hue-rotate(2deg)
      brightness(100%) contrast(126%);
    transition: all 0.3s ease;
    &:hover {
      border: none;
      padding: 0;
      opacity: 0.5;
    }
  }
`;


export const SidebarMain = () => {

  //  const dispatch = useDispatch();
  //  const username = useSelector((state)=>state.username)

    // manage button click state
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [profileClick, setprofileClick] = useState(false);
    const handleProfileClick = () => setprofileClick(!profileClick);
    return (
        <>
        <Container>
            <ButtonS clicked={click} onClick={() => handleClick()}></ButtonS>
            <SidebarContainer>
                <Logo>
                    <img src={logo} alt="logo"/>
                </Logo>
                <SlickBar clicked={click}>
                    {/* <Item onClick={()=>setClick(false)}  to="/homePage">
                        <img src={home} alt="home"></img>
                        <Text clicked={click}>Home</Text>
                    </Item> */}
                    <Item onClick={()=>setClick(false)}  to="/appointments">
                        <img src={appointments} alt="appointments"></img>
                        <Text clicked={click}>Appointments</Text>
              </Item>
              <Item onClick={()=>setClick(false)} exact="true" to="/stats">
                        <img src={graph} alt="stats"></img>
                        <Text clicked={click}>Statistics</Text>
                    </Item>
                </SlickBar>

                <Profile clicked={profileClick}>
                    <img src={user} alt="user" onClick={() => handleProfileClick()}></img>
                    <Details clicked={profileClick}>
                        <Name>
                            <h4>User</h4>
                        </Name>
                        <Logout>
                            {/* <div onClick={(e)=>{
                             dispatch(authenticate())
                            }}> */}
                            <img src={poweroff} alt="Logout"/>
                            {/* </div> */}
                        </Logout>
                    </Details>
                    </Profile>
                </SidebarContainer>
                </Container>
        </>
    )
}
