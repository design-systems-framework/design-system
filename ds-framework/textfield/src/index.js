/** @jsx jsx */

import { useState, useRef } from 'react';
import { jsx } from '@emotion/core';

const inputWrapperStyles = props => ({
  display: 'flex',
  background: 'white',
  flex: '1 0 auto',
  boxSizing: 'border-box',
});
const inputStyles = props => ({
  width: '100%',
});

const defaultStyles = {
  input: inputStyles,
  inputWrapper: inputWrapperStyles,
};

const Textfield = props => {
  const {
    styles,
    isDisabled,
    isReadOnly,
    isRequired,
    isInvalid,
    ...rest
  } = props;

  const [isFocused, setFocused] = useState(false);
  const inputEl = useRef(null);

  const handleOnFocus = event => {
    setFocused(true);
    if (props.onFocus) {
      props.onFocus(event);
    }
  };

  const getStyles = (key, styleProps) => {
    // If there's an existing styles prop
    // check for styles[key](theme[key](styleProps))
    // otherwise just return theme[key](styleProps);
    const defaultStyle = defaultStyles[key](styleProps);
    return styles && styles[key]
      ? styles[key](defaultStyle, styleProps)
      : defaultStyle;
  };

  const handleOnBlur = event => {
    setFocused(false);
    if (props.onBlur) {
      props.onBlur(event);
    }
  };

  const styleProps = {
    isDisabled,
    isFocused,
    isReadOnly,
    isRequired,
    isInvalid,
    ...props,
  };

  return (
    <div css={getStyles('inputWrapper', styleProps)}>
      <input
        css={getStyles('input', styleProps)}
        ref={inputEl}
        disabled={isDisabled}
        required={isRequired}
        readOnly={isReadOnly}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        {...rest}
      />
    </div>
  );
};

export default Textfield;
