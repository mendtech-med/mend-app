import { css } from '@emotion/react';
import { SpinnerType } from './spinner';
import colors from '../../styles/colors';

export const spinnerBackdrop = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: 0.5;
  z-index: 1;
`;

export const spinnerStyle = (type: SpinnerType) => css`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  ${type === 'fullScreen' &&
  `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    border: 6px solid #f3f3f3;
    z-index: 3;
    border-top: 6px solid ${colors.solid.background};
  `}

  ${type === 'inline' &&
  `
    position: relative;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
    border: 2px solid #f3f3f3;
    border-top: 2px solid ${colors.solid.background};
    border-radius: 50%;
    border-top: 2px solid ${colors.solid.background};
  `}

  border-radius: 50%;

  animation: spin 1s linear infinite;
`;

export const spinnerMessage = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  text-align: center;
  width: 100%;
  margin-top: 90px;
  margin-left: 35px;
`;
