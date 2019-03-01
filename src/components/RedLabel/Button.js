import React from 'react';
import Button from '../WhiteLabel/Button';

const ADG = {
  b400: "#643278",
  g400: "#fsdhjk",
  n60: "#002214",
  fontStack: "comic-sans"
};

const ADG_DARK = {
  b400: "#003243",
  g400: "#zzcuyt",
  n60: "#ff78977",
  fontStack: "comic-sans-bold"
};


export default ({ color, appearance, ...props }) => {
  const theme = ({ isPressed }) => {
    const { textColor } = color === "blue" ? ADG.b400 : ADG.g400;
    return {
      color: isPressed ? color : ADG.grey,
      background: isPressed ? ADG.grey : color,
      fontFamily: ADG.fontStack,
      fontWeight: appearance === "bold" ? "bold" : "normal"
    };
  };
  return <Button {...props} theme={theme} />;
};
