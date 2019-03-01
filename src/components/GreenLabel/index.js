import React from 'react';
import Textfield from '../WhiteLabel/Textfield';

function setStyles ({ appearance, isCompact, isMonospaced }) {
  return {
    inputWrapper: (style, props) => ({
      ...style,
      backgroundColor: appearance === 'subtle' ? 'transparent' : '#333',
    }),
    input: (style, prop) => ({
      ...style,
    })
  }
}

export default ({ appearance, isCompact, isMonospaced, ...rest }) => {
  return <Textfield getStyles={setStyles({ appearance, isCompact, isMonospaced })} {...rest} />
}
