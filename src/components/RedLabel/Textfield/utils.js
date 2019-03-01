

export const borderRadius = '3px';
export const borderWidth = 2;
export const grid = 8;// what to do about this?
export const lineHeight = grid * 2.5;
export const fontSize = 14;
export const horizontalPadding = grid;
export const transitionDuration = '0.2s';
export const verticalPaddingCompact = grid / 2;
export const verticalPaddingBase = grid;
export const codeFontFamily = '"SFMono-Medium", "SF Mono", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", Menlo, Consolas, Courier, monospace';

export const getMaxWidth = ({ width }) => {
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

export const overrideSafariDisabledStyles = {
  webkitTextFillColor: 'unset;',
  webkitOpacity: 1,
};

export const getPadding = ({ isCompact }) => {
  const verticalPadding = isCompact
    ? verticalPaddingCompact
    : verticalPaddingBase;
  return {
    padding: `${verticalPadding}px ${horizontalPadding - borderWidth}px;`,
  };
};

export const getHoverState = (props, tokens) => {
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

export const getDisabledState = (props, tokens) =>
  (props.isDisabled && {
    color: tokens.disabledRules.textColor,
    pointerEvents: 'none',
  });

export const getLineHeight = () => {
  return lineHeight / fontSize;
};

export const getBackgroundColor = ({
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

export const getBorderStyle = ({ appearance }) =>
  appearance === 'none' ? 'none' : 'solid';

export const getBorderColor = ({
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

export const getPlaceholderColor = ({
  isDisabled,
}, {
  placeholderTextColor,
  disabledRules,
}) => {
  if (isDisabled) return disabledRules.textColor;
  return placeholderTextColor;
};

export const getPlaceholderStyle = (props, tokens) => ({
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
