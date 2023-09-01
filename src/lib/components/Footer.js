import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../utils/colors';
import Button from './Button';

const Footer = ({ image, title, body, buttonText }) => {
  return (
    <StyledFooter>
      <FooterContainer>
        <h1 style={{ fontFamily: 'Prata' }}>Footer</h1>
        <FooterItems>
          <ItemsTitle>Title Here</ItemsTitle>
          <Item>Item</Item>
          <Item>Item</Item>
          <Item>Item</Item>
          <Item>Item</Item>
        </FooterItems>
        <FooterItems>
          <ItemsTitle>Title Here</ItemsTitle>
          <Item>Item</Item>
          <Item>Item</Item>
          <Item>Item</Item>
          <Item>Item</Item>
        </FooterItems>
        <FooterItems>
          <ItemsTitle>Title Here</ItemsTitle>
          <Item>Item</Item>
          <Item>Item</Item>
          <Item>Item</Item>
          <Item>Item</Item>
        </FooterItems>
        <Logo>Logo</Logo>
      </FooterContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled.div({
  background: colors.primary.dark,
  color: colors.white.base,
  widdth: '100%',
});

const FooterContainer = styled.div({
  height: '200px',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
  fontSize: '1.2rem',
  padding: '2rem',
});

const Logo = styled.div({});

const FooterItems = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

const ItemsTitle = styled.h4({
  fontFamily: 'Prata',
  fontSize: '1.3rem',
  margin: 0,
});

const Item = styled.div({
  lineHeight: 1.5,
});

export default Footer;
