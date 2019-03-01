/* @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/core";

export default ({
  onClick = () => {},
  isDisabled,
  theme,
  ...props
}) => {
  const [isPressed, setPressed] = useState(false);
  const onMouseDown = () => {
    if (isDisabled) return;
    setPressed(true);
  };
  const onMouseUp = () => {
    if (isDisabled) return;
    if (isPressed) onClick();
    setPressed(false);
  };
  const styles = theme({ isDisabled, isPressed });
  return (
    <button
      css={{ display: "inline-block", ...styles }}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      disabled={isDisabled}
      {...props}
    />
  );
};
