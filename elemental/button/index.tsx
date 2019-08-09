import React, { useState, HTMLAttributes, ButtonHTMLAttributes, ComponentType } from 'react';
import { ThemeContext, CSSObject } from '@emotion/core';
// import { useTheme } from '@elemental/theme';
type ButtonProps = BaseProps & HTMLAttributes<ButtonHTMLAttributes<HTMLButtonElement>>

interface BaseProps {
  appearance?: string, 
  variant?: string,
  overrides?: {
    Button: {
      component?: ComponentType;
      styles?: (defaultStyles, state) => CSSObject;
      attributes?: (props: BaseProps) => { [key: string] : any };
    }
  }
} 

export const useButton = () => {
  const [isPressed, setIsPressed] = useState(false);
  const onMouseDown = () => setIsPressed(true);
  const onMouseUp = () => setIsPressed(false);
  return { isPressed, onMouseDown, onMouseUp };
};

export const buttonStyles = (state, theme = {}) => {
  if (state.variant === "solid") {
    return {
      color: "white",
      backgroundColor: theme.packs.colors[state.colorPack].dark,
      borderRadius: theme.tokens.borderRadius.default,
      borderStyle: "none"
    };
  }
  const [foreground, background] = state.isPressed
    ? ["light", "dark"]
    : ["dark", "light"];
  return {
    backgroundColor: theme.packs.colors[state.colorPack][background],
    borderColor: theme.packs.colors[state.colorPack][foreground],
    borderRadius: theme.tokens.borderRadius.default,
    borderStyle: "solid",
    borderWidth: theme.tokens.borderWidth.default,
    color: theme.packs.colors[state.colorPack][foreground]
  };
};

const defaultSet = {
  styles: buttonStyles, 
  attributes: {},
  component: 'button',
}



const baseStyles = {
  display: 'inline-block',
};

export const defaultStyles = (styles, state, theme) => ({
  ...styles,
  borderRadius: 50,
});

///
import compose from 'theme';
import { baseStyles, defaultStyles } from 'button';
import defaultStyles from 'button';
const customStyles = (state, theme) => ({
  ...baseStyles(state, theme),
  ...defaultStyles(state, theme),
  fontWeight: 'bold',
});
<Button overrides={{ Button: { styles: customStyles }}} />
///

export const Button: React.ComponentType<ButtonProps> = function Button ({ overrides, children, appearance = "primary", variant = "normal" }: ButtonProps) {
  // const theme = useTheme();
  const { isPressed, onMouseDown, onMouseUp } = useButton();
  const state = {
    isPressed,
  }
  function getOverrides (key) {
    /// PARTIAL APPLICATION OF STYLES
    const { styles, components, attributes } = overrides[key];
    const { styles: defaultStyleFn, } = defaultSet[key];
    const defaultStyles = defaultStyleFn(baseStyles, state, theme);
    const customStyles = styles(defaultStyles, state, theme);
  
    return customStuff ? { styles: customStyles, ...customStuff } : { styles: defaultStyles(state, theme), ...defaultStuff }
  };
  
  

  const colorPack =
    appearance === "secondary" ? "actionSecondary" : "actionPrimary";
  
  const { attributes, styles, component: Component } = getOverrides('Button');
  return (
    <Component {...attributes} css={styles} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
      {children}
    </Component>
  );
};

const Button = makeButton({
  from: 'button',
  has: {
    iconBefore: true,
    loading: true,
  }
}, {
  styles: [() => {...}],
  attributes: {...},
  component: () => {},
})

export default Button;