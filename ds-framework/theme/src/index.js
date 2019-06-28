import React, { createContext } from 'react';
const unary = t => t;

function createTheme (themeTokens = {}) {
  const ThemeCtx = createContext(unary)
  function Consumer ({ children }) {
    return (
      <ThemeCtx.Consumer>
        {tfn => {
          const tokens = tfn(theme);
          return props.children(tokens);
        }}
      </ThemeCtx.Consumer>
    )
  }

  function Provider ({ value: vfn, children }) {
    return (
      <ThemeCtx.Consumer>
        {tfn => {
          const newTfn = (t) => tfn(vfn(t));
          return (
            <ThemeCtx.Provider value={newTfn}>
              {children}
            </ThemeCtx.Provider>
          )
        }}
      </ThemeCtx.Consumer>
    )
  }
}

export default createTheme;
