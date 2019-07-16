import React, { createContext, useContext } from 'react';

function createTheme (defaultTokens = {}) {
  const ThemeCtx = createContext(defaultTokens);
  function Consumer ({ children, ...rest }) {
    const ctxTokens = useContext(ThemeCtx);
    const tokens = merge(defaultTokens, ctxTokens);
    return children(tokens);
  }
  function Provider ({ value: valueTokens, children }) {
    const prevTokens = useContext(ThemeCtx);
    const tokens = merge(ctxTokens, valueTokens);
    <ThemeCtx.Provider value={tokens}>
      {children}
    </ThemeCtx.Provider>
  }
}

export default createTheme;