import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../utils/colors';
import Button from './Button';

const Hero = ({
  image,
  logo,

  backgroundColor,
  title,
  subhtitle,
  primaryCta,
}) => {
  const Container = ({ children }) => {
    return (
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${image})`,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: backgroundColor && backgroundColor,
          height: '80vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: 0,
        }}
      >
        {children}
      </div>
    );
  };

  return (
    <Container>
      <Wrapper>
        <Logo src={logo} />
        <Title>{title}</Title>
        <Subtitle>{subhtitle} </Subtitle>
        {primaryCta && <Button />}
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div({
  width: '100%',
  height: 'auto',
});

const Logo = styled.img({
  padding: '1rem',
  width: '400px',
});

const Title = styled.h4({
  fontFamily: 'Prata',
  fontSize: '4rem',
  color: colors.secondary.base,
  margin: 0,
});

const Subtitle = styled.p({
  fontFamily: 'Montserrat',
  fontSize: '1.5rem',
  color: colors.white.base,
  lineHeight: 1.5,
});

export default Hero;
