import * as React from 'react';
import styled, { keyframes } from 'react-emotion';

const gradients = {
  purple: 'linear-gradient(to right, #9d50bb, #6e48aa)',
  orange: 'linear-gradient(to right, #ff4e50, #f9d423)',
  pink: 'linear-gradient(to right, #f857a6, #ff5858)',
  blue: 'linear-gradient(to right, #4b6cb7, #182848)',
  green: 'linear-gradient(to right, #134E5E, #71B280)',
};

export const Main = styled('main')`
  overflow: hidden;
  min-height: 30em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: ${props => gradients[props.gradient]};
  color: #ffffff;
  clip-path: polygon(99% 1%, 99% 95%, 50% 99%, 1% 95%, 1% 1%, 50% 5%);
  &:first-child {
    clip-path: polygon(99% 2%, 99% 97%, 50% 100%, 1% 97%, 1% 2%);
  }
  &:last-child {
    height: calc(100vh - 0.5em);
    clip-path: polygon(99% 0%, 99% 98%, 50% 98%, 1% 98%, 1% 0%, 50% 3%);
  }
`;

export const ReferenceBox = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10em;
  height: 6em;
  background-color: #ffffff;
  color: #000000;
  border-radius: 4px;
  z-index: 1;
  position: relative;

  a {
    color: #000000;
  }
`;

export const ClickableReferenceBox = styled(ReferenceBox)`
  cursor: pointer;
`;

export const PopperBox = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 6em;
  height: 6em;
  background-color: #232323;
  color: #ffffff;
  border-radius: 10px;
  margin: 0.9em;
  padding: 0.5em;
  text-align: center;
  ${props => props.popperStyle};
`;

export const TransitionedPopperBox = styled(PopperBox)`
  transition: all 0.2s ease-out;
`;

export const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;
export const PoppersContainer = styled('div')`
  opacity: 0;
  animation: ${fadeIn} 0.3s ease-in 0.5s forwards;
`;

export const pulse = keyframes`
  0%   { box-shadow: 0 0 0 rgba(0, 0, 0, .2); }
  50%  { box-shadow: 0 0 0 4px rgba(0, 0, 0, .2); }
  100% { box-shadow: 0 0 0 rgba(0, 0, 0, .2); }
`;

export const PopperDot = styled('button')`
  cursor: pointer;
  border: 0;
  font-size: inherit;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: #232323;
  margin: 3.5em;
  animation: ${pulse} 2s ease infinite;
`;

export const Arrow = styled('div')`
  position: absolute;
  width: 3em;
  height: 3em;
  &[data-placement*='bottom'] {
    top: 0;
    left: 0;
    margin-top: -0.9em;
    width: 3em;
    height: 1em;
    &::before {
      border-width: 0 1.5em 1em 1.5em;
      border-color: transparent transparent #232323 transparent;
    }
  }
  &[data-placement*='top'] {
    bottom: 0;
    left: 0;
    margin-bottom: -0.9em;
    width: 3em;
    height: 1em;
    &::before {
      border-width: 1em 1.5em 0 1.5em;
      border-color: #232323 transparent transparent transparent;
    }
  }
  &[data-placement*='right'] {
    left: 0;
    margin-left: -0.9em;
    height: 3em;
    width: 1em;
    &::before {
      border-width: 1.5em 1em 1.5em 0;
      border-color: transparent #232323 transparent transparent;
    }
  }
  &[data-placement*='left'] {
    right: 0;
    margin-right: -0.9em;
    height: 3em;
    width: 1em;
    &::before {
      border-width: 1.5em 0 1.5em 1em;
      border-color: transparent transparent transparent#232323;
    }
  }
  &::before {
    content: '';
    margin: auto;
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
  }
`;

const Svg = styled('svg')`
  height: 1em;
  width: 1em;
  position: relative;
  top: 0.2em;
  display: inline-block;

  path {
    fill: currentColor;
  }
`

export const GithubIcon = () => (
  <Svg viewBox="0 0 24 24" alt="github octocat icon">
    <path d={`
      M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
      0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729
      1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93
      0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3
      .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805
      5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0
      .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12`
    } />
  </Svg>
)

export const ShellContainer = styled('div')`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 16em;
`

export const ShellCommand = styled('pre')`
  font-size: 1.6em;
  padding: 0.6em 1.2em;
  background: #333333;
  color: white;
  border-radius: 0.6em;
`
