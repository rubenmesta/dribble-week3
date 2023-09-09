import React from 'react';
import { colors } from '../utils/colors';
import styled from '@emotion/styled';

const variantStyles = {
  primary: {
    backgroundColor: colors.primary.base,
    color: colors.white.base,
    border: `1px solid ${colors.primary.base}`,
    '&:hover': {
      backgroundColor: colors.primary.hover,
      border: `1px solid ${colors.primary.hover}`,
    },
  },
  secondary: {
    backgroundColor: colors.secondary.base,
    color: colors.white.base,
    border: `1px solid ${colors.secondary.base}`,

    '&:hover': {
      backgroundColor: colors.secondary.hover,
      border: `1px solid ${colors.secondary.hover}`,
    },
  },
  black: {
    backgroundColor: colors.black.base,
    color: colors.grey.light,
    border: `1px solid ${colors.black.base}`,

    '&:hover': {
      backgroundColor: colors.grey.dark,
      border: `1px solid ${colors.grey.dark}`,
    },
  },
  light: {
    backgroundColor: colors.teritary.base,
    color: colors.black.base,
    border: `1px solid ${colors.teritary.base}`,

    '&:hover': {
      backgroundColor: colors.teritary.hover,
      border: `1px solid ${colors.teritary.hover}`,
    },
  },
  outline: {
    backgroundColor: 'transparent',
    color: colors.white.base,
    border: `1px solid ${colors.white.base}`,

    '&:hover': {
      color: colors.grey.light,
      borderColor: colors.grey.light,
    },
  },
};

const StyledButton = styled.button(
  {
    border: 0,
    padding: '1rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    textDecoration: 'none',
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '1rem',

    '&:hover': {
      textDecoration: 'none',
    },

    ':focus:not(:focus-visible)': {
      outline: 0,
    },
  },
  ({ variant = 'primary', fullwidth }) => ({
    width: fullwidth ? '100%' : 'inherit',
    ...variantStyles[variant],
  })
);

const Arrow = () => {
  return (
    <svg
      fill="currentColor"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.95246 1.06044L6.64613 0.366772C6.93985 0.0730551 7.4148 0.0730551 7.70539 0.366772L13.7797 6.43797C14.0734 6.73169 14.0734 7.20663 13.7797 7.49723L7.70539 13.5715C7.41167 13.8653 6.93673 13.8653 6.64613 13.5715L5.95246 12.8779C5.65562 12.581 5.66187 12.0967 5.96496 11.8061L9.73016 8.21902H0.749916C0.334338 8.21902 0 7.88468 0 7.4691V6.46922C0 6.05364 0.334338 5.7193 0.749916 5.7193H9.73016L5.96496 2.1322C5.65874 1.84161 5.65249 1.35729 5.95246 1.06044Z" />
    </svg>
  );
};

const Button = ({ variant, label, fullwidth, onClick, withArrow }) => {
  return (
    <StyledButton
      variant={variant}
      label={label}
      onClick={onClick}
      fullwidth={fullwidth}
    >
      {label}
      {withArrow && (
        <span style={{ marginLeft: '.5rem', marginTop: '4px' }}>
          <Arrow />{' '}
        </span>
      )}
    </StyledButton>
  );
};

export default Button;
