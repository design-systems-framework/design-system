import React, { useContext, createContext } from 'react';
import {
  getMaxWidth,
  getBackgroundColor,
  getBorderColor,
  getBorderStyle,
  getPadding,
  getHoverState,
  getDisabledState,
  borderRadius,
  borderWidth,
  fontSize,
  transitionDuration,
  codeFontFamily,
  getLineHeight,
  overrideSafariDisabledStyles,
  getPlaceholderStyle
} from './utils.js';

import memoizeOne from 'memoize-one';
import * as TextfieldTokens from './theme';
import Textfield from '../../WhiteLabel/Textfield';

const dlTheme = (tokens) => ({
  inputWrapper: (styles, props) => ({
      ...styles,
      color: props.textColor, // TOKEN
      maxWidth: getMaxWidth(props, tokens),
      alignItems: 'center',
      backgroundColor: getBackgroundColor(props, tokens),
      borderColor: getBorderColor(props, tokens),
      borderRadius: borderRadius,
      borderWidth: `${borderWidth}px`,
      borderStyle: `${getBorderStyle(props, tokens)};`,
      boxSizing: 'border-box;',
      display: 'flex',
      flex: '1 0 auto',
      fontSize: `${fontSize}px`,
      justifyContent: 'space-between',
      overflow: 'hidden',
      transition: `background-color ${transitionDuration} ease-in-out
      border-color ${transitionDuration} ease-in-out`,
      wordWrap: 'break-word',
      verticalAlign: 'top',
      ...(props.isDisabled ? { cursor: 'not-allowed' } : null),
      ...getPadding(props, tokens),
      ...getHoverState(props, tokens),
      ...getDisabledState(props, tokens),
    }),
    input: (styles, props) => ({
      ...styles,
      background: 'transparent',
      border: 0,
      padding: 0,
      boxSizing: 'border-box',
      color: 'inherit',
      cursor: 'inherit',
      fontFamily: props.isMonospaced ? codeFontFamily() : 'inherit',
      fontSize: `${fontSize}px;`,
      minWidth: 0,
      outline: 'none',
      width: '100%',
      lineHeight: getLineHeight(props, tokens),
      '&[disabled]': {
        ...overrideSafariDisabledStyles,
      },
      '&::-ms-clear': {
        display: 'none;',
      },

      '&:invalid': {
        boxShadow: 'none',
      },
      ...getPlaceholderStyle(props, tokens),
    }),
});

const stylesFn = memoizeOne(dlTheme);

const DLContext = createContext({
  backgroundColor: TextfieldTokens.backgroundColor,
  backgroundColorFocus: TextfieldTokens.backgroundColorFocus,
  backgroundColorHover: TextfieldTokens.backgroundColorHover,
  borderColor: TextfieldTokens.borderColor,
  borderColorFocus: TextfieldTokens.borderColorFocus,
  placeholderTextColor: 'gray',
  textColor: 'black',
  invalidRules: TextfieldTokens.invalidRules,
  disabledRules: TextfieldTokens.disabledRules,
});

const redLabelTokens = (tokens, { appearance, mode }) => {
  return Object.keys(tokens).reduce((acc, curr) => {
    if (typeof tokens[curr] === 'string') {
      acc[curr] = tokens[curr];
    } else if (typeof tokens[curr][appearance]  === 'string') {
      acc[curr] = tokens[curr][appearance];
    } else {
      acc[curr] = tokens[curr][mode];
    }
    return acc;
  }, {});
};

const DLTextfield = (props) => {
  const tokens = redLabelTokens(useContext(DLContext), props);
  const styles = dlTheme(tokens);
  return  <Textfield {...props} styles={styles}/>;
}

DLTextfield.defaultProps = { appearance: 'standard' };
export default DLTextfield;
