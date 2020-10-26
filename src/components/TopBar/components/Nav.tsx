import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink exact activeClassName="active" to="/">
        Home
      </StyledLink>
      <StyledLink exact activeClassName="active" to="/victims">
        Victims
      </StyledLink>
      <StyledLink exact activeClassName="active" to="/drainable">
        Drainable
      </StyledLink>
      {/* <StyledAbsoluteLink
        href="https://exchange.sushiswapclassic.org"
        target="_blank"
      >
        Exchange
      </StyledAbsoluteLink> */}
      <StyledAbsoluteLink
        href="https://medium.com/@DraculaProtocol/the-dracula-protocol-919a80fcb09"
        target="_blank"
      >
        About
      </StyledAbsoluteLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled(NavLink)`
  // color: ${(props) => props.theme.color.grey[400]};
  color: rgb(117, 106, 117);
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    // color: ${(props) => props.theme.color.grey[500]};
    color: rgb(223, 238, 255);
  }
  &.active {
    // color: ${(props) => props.theme.color.primary.main};
    color: rgb(223, 238, 255);
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

const StyledAbsoluteLink = styled.a`
  // color: ${(props) => props.theme.color.grey[400]};
  color: rgb(117, 106, 117);
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    // color: ${(props) => props.theme.color.grey[500]};
    color: rgb(223, 238, 255);
  }
  &.active {
    // color: ${(props) => props.theme.color.primary.main};
    color: rgb(223, 238, 255);
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

export default Nav
