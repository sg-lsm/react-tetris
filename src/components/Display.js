import React from "react";
import { StyledDisplay } from './styles/StyledDisplay';

const Display = ({ text, gameOver }) => {
  return (
  <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
  )
};

export default Display;
