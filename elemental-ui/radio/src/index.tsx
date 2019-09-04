/** @jsx jsx */
import { jsx } from '@emotion/core';

const defaultInputStyles = (state: Record<string, any>) => ({
  display: 'inline-block',
});

const defaults: Record<string, any> = {
  Input: {
    component: (props: Record<string, any>) => (
      <input type="radio" {...props} />
    ),
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

export interface TextAreaProps extends React.AllHTMLAttributes<HTMLInputElement>{
  overrides?: Record<string, any>;
}

export default function Input({ overrides, ...props }: TextAreaProps) {
  const { styles, attributes, component: InputComponent } = getOverrides(
    'Input',
    overrides
  );
  return <InputComponent css={styles(props)} {...props} />;
}
