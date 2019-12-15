import React from 'react';
import { Footer as BaseFooter } from './styles';

export function Footer({ className, children, ...props }) {
  return (
    <BaseFooter className={className} {...props}>
      {children}
    </BaseFooter>
  );
}
