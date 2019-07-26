import React from 'react';
import Head from 'next/head';

type Props = {
  title: string;
  children?: React.ReactNode;
};

export default ({ title = 'Design System™', children }: Props) => (
  <Head>
    <title>{title}</title>
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/static/favicons/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/static/favicons/favicon-16x16.png"
    />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    {children}
  </Head>
);
