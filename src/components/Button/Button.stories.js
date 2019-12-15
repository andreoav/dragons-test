import React from 'react';
import { Button } from '.';

export default {
  title: 'Components|Button',
  component: Button,
};

export const defaultStyle = () => <Button>Click me</Button>;
export const dangerStyle = () => <Button className="is-danger">Click me</Button>;
export const disabledStyle = () => <Button disabled>Disabled button</Button>;
