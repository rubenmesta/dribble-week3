import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../utils/colors';
import Button from './Button';

const Card = ({ image, title, body, variant, buttonText }) => {
  return (
    <StyledCard>
      <div>
        {' '}
        <StyledImage src={image} />
      </div>
      <Container>
        <Title>{title}</Title>
        <Body>{body} </Body>
        <Button label={buttonText} variant={variant} />
      </Container>
    </StyledCard>
  );
};

const StyledCard = styled.div({
  border: `1px solid ${colors.teritary.base}`,
  borderRadius: '8px',
  color: colors.black.base,
  width: '350px',
  background: colors.white.base,
});

const StyledImage = styled.img({
  width: '100%',
  height: 'auto',
  borderRadius: '8px 8px 0 0',
});

const Container = styled.div({
  padding: '1rem 1rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

const Title = styled.h4({
  fontFamily: 'Prata',
  fontSize: '1.5rem',
  color: colors.secondary.dark,
  margin: 0,
});

const Body = styled.p({
  fontFamily: 'Montserrat',
  fontSize: '1rem',
  color: colors.black.dark,
  lineHeight: 1.5,
});

export default Card;
