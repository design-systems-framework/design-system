import React, { useContext, createContext } from 'react';
import memoizeOne from 'memoize-one';
import * as TextfieldTokens from './theme';
import Textfield from '../../WhiteLabel/Textfield';


const borderRadius = '3px';
const borderWidth = 2;
const grid = 8;// what to do about this?
const lineHeight = grid * 2.5;
const fontSize = 14;
const horizontalPadding = grid;
const transitionDuration = '0.2s';
const verticalPaddingCompact = grid / 2;
const verticalPaddingBase = grid;
const codeFontFamily = '"SFMono-Medium", "SF Mono", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", Menlo, Consolas, Courier, monospace';

const getMaxWidth = ({ width }) => {
  if (!width) return `100%`;
  switch (width) {
    case 'xsmall':
      return '80px';
    case 'small':
      return '160px';
    case 'medium':
      return '240px';
    case 'large':
      return '320px';
    case 'xlarge':
      return '480px';
    default:
      return `${width}px`;
  }
};

const overrideSafariDisabledStyles = {
  webkitTextFillColor: 'unset;',
  webkitOpacity: 1,
};

const getPadding = ({ isCompact }) => {
  const verticalPadding = isCompact
    ? verticalPaddingCompact
    : verticalPaddingBase;
  return {
    padding: `${verticalPadding}px ${horizontalPadding - borderWidth}px;`,
  };
};

const getHoverState = (props, tokens) => {
  if (props.isReadOnly || props.isFocused || props.none) return null;
  let backgroundColorHover = tokens.backgroundColorHover;
  if (props.isDisabled) {
    backgroundColorHover = tokens.disabledRules.backgroundColorHover;
  }
  if (props.isInvalid) {
    backgroundColorHover = tokens.invalidRules.backgroundColorHover;
  }

  return {
    '&:hover': {
      backgroundColor: backgroundColorHover,
    }
  };
};

const getDisabledState = (props, tokens) =>
  (props.isDisabled && {
    color: tokens.disabledRules.textColor,
    pointerEvents: 'none',
  });

const getLineHeight = () => {
  return lineHeight / fontSize;
};

const getBackgroundColor = ({
  isFocused,
  isDisabled,
  isInvalid,
  ...p
}, {
  disabledRules,
  invalidRules,
}) => {
  let backgroundColor = isFocused ? p.backgroundColorFocus : p.backgroundColor;
  if (isDisabled) {
    backgroundColor = isFocused
      ? disabledRules.backgroundColorFocus
      : disabledRules.backgroundColor;
  } else if (isInvalid) {
    backgroundColor = isFocused
      ? invalidRules.backgroundColorFocus
      : invalidRules.backgroundColor;
  }
  return backgroundColor;
};

const getBorderStyle = ({ appearance }) =>
  appearance === 'none' ? 'none' : 'solid';

const getBorderColor = ({
  isFocused,
  isDisabled,
  isInvalid,

  ...p
}, {
  disabledRules,
  invalidRules,
  ...tokens
}) => {
  let borderColor = isFocused ?tokens.borderColorFocus :tokens.borderColor;
  if (isDisabled) {
    borderColor = isFocused
      ? disabledRules.borderColorFocus
      : disabledRules.borderColor;
  } else if (isInvalid) {
    borderColor = isFocused
      ? invalidRules.borderColorFocus
      : invalidRules.borderColor;
  }
  return borderColor;
};

const getPlaceholderColor = ({
  isDisabled,
}, {
  placeholderTextColor,
  disabledRules,
}) => {
  if (isDisabled) return disabledRules.textColor;
  return placeholderTextColor;
};

const getPlaceholderStyle = (props, tokens) => ({
  '&::-webkit-input-placeholder': {
    /* WebKit, Blink, Edge */
    color: getPlaceholderColor(props, tokens),
  },
  '&::-moz-placeholder': {
    /* Mozilla Firefox 19+ */
    color: getPlaceholderColor(props, tokens),
    opacity: '1',
  },
  '&::-ms-input-placeholder': {
    /* Microsoft Edge */
    color: getPlaceholderColor(props, tokens),
  },
  '&:-ms-input-placeholder': {
    /* Internet Explorer 10-11 */
    color: getPlaceholderColor(props, tokens),
  },
});

const adgTheme = (tokens) => ({
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
const stylesFn = memoizeOne(adgTheme);

const ADGContext = createContext({
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

const ADGTextfield = (props) => {
  const tokens = redLabelTokens(useContext(ADGContext), props);
  const styles = adgTheme(tokens);
  return  <Textfield {...props} styles={styles}/>;
}

ADGTextfield.defaultProps = { appearance: 'standard' };
export default ADGTextfield;
