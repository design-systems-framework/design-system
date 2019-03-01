import React from 'react';
import Button from '../WhiteLabel/Button';

const LIGHT = {
  b400: "#643278",
  g400: "#fsdhjk",
  n60: "#002214",
  fontStack: "comic-sans"
};

export default ({ color, appearance, ...props }) => {
  const theme = ({ isPressed }) => {
    const { textColor } = color === "blue" ? LIGHT.b400 : LIGHT.g400;
    return {
      color: isPressed ? color : LIGHT.grey,
      background: isPressed ? LIGHT.grey : color,
      fontFamily: LIGHT.fontStack,
      fontWeight: appearance === "bold" ? "bold" : "normal"
    };
  };
  return <Button {...props} theme={theme} />;
};
