import React, { createContext, useContext } from 'react';

function createTheme (defaultTokens = {}) {
  const ThemeCtx = createContext(defaultTokens);
  function Consumer ({ children, ...rest }) {
    const ctxTokens = useContext(ThemeCtx);
    const tokens = merge(defaultTokens, ctxTokens);
    return children(tokens);
  }
  function Provider ({ value: valueTokens, children }) {
    const ctxTokens = useContext(ThemeCtx);
    const tokens = merge(ctxTokens, valueTokens);
    <ThemeCtx.Provider value={tokens}>
      {children}
    </ThemeCtx.Provider>
  }
  return {
    Consumer,
    Provider
  }
}

export default createTheme;