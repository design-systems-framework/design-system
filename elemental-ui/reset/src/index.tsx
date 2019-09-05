import React from 'react';
import { Global, css } from '@emotion/core';

// TODO: Pull these font stacks from a theme package

const resetCSS = css`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    line-height: 1.5;
  }
  pre,
  code,
  kbd,
  samp {
    font-family: Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
      monospace;
  }
`;

export default function Reset() {
  return <Global styles={resetCSS} />;
}
