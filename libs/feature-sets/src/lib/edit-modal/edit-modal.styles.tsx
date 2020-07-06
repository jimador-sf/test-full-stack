/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import ReactModal from 'react-modal';

const modalCss = css`
  color: white;
  // display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  background-color: rgba(0,0,0, 0.3);
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  top: 0px;
  left: 0px;
  animation: ease-in;
  animation-timing-function: cubic-bezier(0.3, 0.27, 0.07, 1.64);
  animation-duration: 0.4s;
`

export const StyledEditModal = (props) => {
  return <ReactModal css={modalCss} {...props} />
}
