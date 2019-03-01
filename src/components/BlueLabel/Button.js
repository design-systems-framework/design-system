import React from 'react';
import Button from '../WhiteLabel/Button';

const NACHOS = {
  blue: "#336699",
  grey: "#ccc",
  fontStack: "times-new-roman"
};


export default props => {
  const theme = ({ isPressed }) => ({
    color: isPressed ? NACHOS.grey : NACHOS.blue,
    background: isPressed ? NACHOS.blue : NACHOS.grey,
    fontFamily: NACHOS.fontStack
  });
  return <Button theme={theme} {...props} />;
};
