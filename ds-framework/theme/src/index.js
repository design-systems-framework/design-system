import React, { createContext, useContext } from 'react';
const unary = t => t;

function createTheme (themeTokens = {}) {
  const ThemeCtx = createContext(unary)
  function Consumer ({ children }) {
    const tfn = useContext(ThemeCtx);
    return children(tfn(theme));
  }

  function Provider ({ value: vfn, children }) {
    const tfn = useContext(ThemeCtx);
    const newTfn = (t) => tfn(vfn(t));
    return (
      <ThemeCtx.Provider value={newTfn}>
        {children}
      </ThemeCtx.Provider>
    );
  }
  return {
    Provider,
    Consumer
  }
}

export default createTheme;
