import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../utils/colors';

const Navbar = ({ items }) => {
  return (
    <Nabar>
      <NavContainer>
        <Logo>Logo</Logo>
        <NavbarItems>
          {items.map((item) => {
            return <Item>{item}</Item>;
          })}
        </NavbarItems>
      </NavContainer>
    </Nabar>
  );
};

const Nabar = styled.nav({
  background: colors.primary.dark,
  color: colors.white.base,
  widdth: '100%',
});

const NavContainer = styled.div({
  height: '80px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
  fontSize: '1.2rem',
});

const Logo = styled.div({});

const NavbarItems = styled.div({
  display: 'flex',
});

const Item = styled.div({
  margin: '0 1rem',
  '&:first-of-type': {
    marginLeft: 0,
  },
  '&:last-of-type': {
    marginRight: 0,
  },
});

export default Navbar;
