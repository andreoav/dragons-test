import React from 'react';

import { Button as BaseButton } from './styles';

export function Button({ children, ...props }) {
  return <BaseButton {...props}>{children}</BaseButton>;
}
