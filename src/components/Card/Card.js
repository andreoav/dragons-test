import React from 'react';

import { Footer } from './Footer';
import { Content } from './Content';
import { BaseCard } from './styles';

export function Card({ className, children, ...props }) {
  return (
    <BaseCard className={className} {...props}>
      {children}
    </BaseCard>
  );
}

Card.Footer = Footer;
Card.Content = Content;
