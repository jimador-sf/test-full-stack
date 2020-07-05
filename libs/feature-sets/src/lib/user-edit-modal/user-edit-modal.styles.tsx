import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';

export const inputControlCss = css`
  width: 621.5px;
  height: 88px;
  margin-bottom: 35px;
`;

export const inputCss = css`
  width: 621.5px;
  height: 64px;


  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  display: flex;
  align-items: center;

  color: #000000;
`;

export const inputLabelCss = css`
  width: 256.71px;
  height: 16px;


  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;

  color: #000000;
`;

export const formCss = css`
  padding: 2px 20px 20px 20px
`;

export const headerText = css`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 60px;
  display: flex;
  align-items: center;

  color: #000000;
`;

export const pulsate = keyframes`
  0% {
    transform: scale(0.1, 0.1);
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: scale(1.2, 1.2);
    opacity: 0;
  }
`;

export const bounce = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-2000px) rotate(-45deg);
  }

  60% {
    opacity: 1;
    transform: translateY(30px) rotate(-45deg);
  }

  80% {
    transform: translateY(-10px) rotate(-45deg);
  }

  100% {
    transform: translateY(0) rotate(-45deg);
  }
`;

export const Pin = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50% 50% 50% 0;
  background: #e90000;
  position: absolute;
  transform: rotate(-45deg);
  left: 50%;
  top: 50%;
  margin: -20px 0 0 -20px;
  animation-name: ${bounce};
  animation-fill-mode: both;
  animation-duration: 1s;
  &:after {
    content: "";
    width: 14px;
    height: 14px;
    margin: 8px 0 0 8px;
    background: #e6e6e6;
    position: absolute;
    border-radius: 50%;
  }
`;

export const Pulse = styled.div`
  background: #d6d4d4;
  border-radius: 50%;
  height: 14px;
  width: 14px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: 11px 0px 0px -12px;
  transform: rotateX(55deg);
  z-index: -2;
  &:after {
    content: "";
    border-radius: 50%;
    height: 40px;
    width: 40px;
    position: absolute;
    margin: -13px 0 0 -13px;
    animation: ${pulsate} 1s ease-out;
    animation-iteration-count: infinite;
    opacity: 0;
    box-shadow: 0 0 1px 2px #e90000;
    animation-delay: 1.1s;
}
`;
