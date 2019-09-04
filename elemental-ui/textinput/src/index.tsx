/** @jsx jsx */
import { jsx } from '@emotion/core';

const defaultInputStyles = (state: Record<string, any>) => ({
  display: 'inline-block',
});

const defaults: Record<string, any> = {
  Input: {
    component: (props: Record<string, any>) => <input type="text" {...props} />,
    styles: defaultInputStyles,
  },
};

function getOverrides(key: string, overrides: Record<string, any> = {}) {
  if (!overrides[key]) {
    return defaults[key];
  } else {
    return {
      ...defaults[key],
      ...overrides[key],
    };
  }
}

export interface TextInputProps {
  overrides?: Record<string, any>;
}

export default function Input({ overrides, ...props }: TextInputProps) {
  const { styles, attributes, component: InputComponent } = getOverrides(
    'Input',
    overrides
  );
  return <InputComponent css={styles(props)} {...props} />;
}
