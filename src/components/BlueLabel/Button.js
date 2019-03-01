import React from 'react';
import Button from '../WhiteLabel/Button';

const BLUETHEME = {
  blue: "#336699",
  grey: "#ccc",
  fontStack: "times-new-roman"
};


export default props => {
  const theme = ({ isPressed }) => ({
    color: isPressed ? BLUETHEME.grey : BLUETHEME.blue,
    background: isPressed ? BLUETHEME.blue : BLUETHEME.grey,
    fontFamily: BLUETHEME.fontStack
  });
  return <Button theme={theme} {...props} />;
};
