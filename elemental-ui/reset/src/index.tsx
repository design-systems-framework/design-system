import React from 'react';
import { Global, css } from '@emotion/core';

const resetCSS = css`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    line-height: 1.5;
  }
`;

export default function Reset() {
  return <Global styles={resetCSS} />;
}
