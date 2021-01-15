import React from 'react'
import styled from 'styled-components'
import Burger from './Burger';

const NavbarStyled = styled.div`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`

export default function Navbar() {
    return (
        <NavbarStyled>
            <div className="logo">
                Travel
            </div>
            <Burger />
        </NavbarStyled>
    )
}