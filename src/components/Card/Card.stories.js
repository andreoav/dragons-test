import React from 'react';

import { Card } from '.';

export default {
  title: 'Components|Card',
  component: Card,
};

export const baseStyles = () => {
  return (
    <Card>
      <Card.Content>Some content</Card.Content>
    </Card>
  );
};
