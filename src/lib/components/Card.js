import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../utils/colors';
import Button from './Button';

const Card = ({ image, title, body, buttonText }) => {
  return (
    <StyledCard>
      <div>
        {' '}
        <StyledImage src={image} />
      </div>
      <Container>
        <Title>{title}</Title>
        <Body>{body} </Body>
        <Button label={buttonText} variant={'primary'} />
      </Container>
    </StyledCard>
  );
};

const StyledCard = styled.div({
  border: `1px solid ${colors.grey.base}`,
  borderRadius: '8px',
  color: colors.black.base,

  width: '350px',
});

const StyledImage = styled.img({
  width: '100%',
  height: 'auto',
  borderRadius: '8px 8px 0 0',
});

const Container = styled.div({
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

const Title = styled.h4({
  fontFamily: 'Prata',
  color: colors.secondary.base,
  margin: 0,
});

const Body = styled.p({
  fontFamily: 'Montserrat',
  fontSize: '1rem',
  color: colors.black.dark,
  lineHeight: 1.5,
});

export default Card;
