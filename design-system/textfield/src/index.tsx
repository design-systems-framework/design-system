/** @jsx jsx */

import { useState, useRef, InputHTMLAttributes, FocusEvent } from 'react';
import { jsx, CSSObject } from '@emotion/core';

type BaseProps = {
  isDisabled: boolean;
  isReadOnly: boolean;
  isRequired: boolean;
  isInvalid: boolean;
};

type StyleProps = BaseProps & {
  isFocused: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

type StyleFunc = (props: StyleProps) => CSSObject;

const inputWrapperStyles: StyleFunc = props => ({
  display: 'flex',
  background: 'white',
  flex: '1 0 auto',
  boxSizing: 'border-box',
});
const inputStyles: StyleFunc = props => ({
  width: '100%',
});

type StylesProp<StyleProps, TypeOfDefaultStyles> = {
  [K in keyof TypeOfDefaultStyles]?: (
    defaultStyles: CSSObject,
    props: StyleProps
  ) => CSSObject;
};

const defaultStyles = {
  input: inputStyles,
  inputWrapper: inputWrapperStyles,
} as const;

type Props = Partial<BaseProps> &
  InputHTMLAttributes<HTMLInputElement> & {
    styles?: StylesProp<StyleProps, typeof defaultStyles>;
  };

const Textfield = ({
  styles,
  isDisabled = false,
  isReadOnly = false,
  isRequired = false,
  isInvalid = false,
  ...rest
}: Props) => {
  const [isFocused, setFocused] = useState(false);
  const inputEl = useRef(null);

  const getStyles = (
    key: keyof typeof defaultStyles,
    styleProps: StyleProps
  ) => {
    // If there's an existing styles prop
    // check for styles[key](theme[key](styleProps))
    // otherwise just return theme[key](styleProps);
    const defaultStyle = defaultStyles[key](styleProps);

    return styles && styles[key]
      ? styles[key](defaultStyle, styleProps)
      : defaultStyle;
  };

  const handleOnFocus = (event: FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    if (rest.onFocus) {
      rest.onFocus(event);
    }
  };

  const handleOnBlur = (event: FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    if (rest.onBlur) {
      rest.onBlur(event);
    }
  };

  const styleProps = {
    isDisabled,
    isFocused,
    isReadOnly,
    isRequired,
    isInvalid,
    ...rest,
  };

  return (
    <div css={getStyles('inputWrapper', styleProps)}>
      <input
        css={getStyles('input', styleProps)}
        ref={inputEl}
        disabled={isDisabled}
        required={isRequired}
        readOnly={isReadOnly}
        {...rest}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
    </div>
  );
};

export default Textfield;
