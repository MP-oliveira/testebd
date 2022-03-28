import React from 'react'
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from "./Button";
import { FaBars } from 'react-icons/fa'

const Nav = styled.nav`
  height: 3.5rem;
  background: red;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  max-width: 100rem;

`
const NavLink = css`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0rem 1rem;
  height: 100%;
  cursor: pointer;
`

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`
const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background-size: contain;
    height: 30px;
    width: 30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
    color: white;
  }
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -40px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
const NavMenuLink = styled(Link)`
  ${NavLink}
`
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`


const Navbar = () => {
  return (
    <Nav>
      <Logo to='/'>EBD</Logo>
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLink to={item.link} key={index}>{item.title}</NavMenuLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">Entre em Contato</Button>
      </NavBtn>
      <MenuBars />
    </Nav>
  )
}

export default Navbar 