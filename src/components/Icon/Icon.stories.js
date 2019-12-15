import React from 'react';
import { Icon } from './Icon';

export default {
  title: 'Components|Icon',
  component: Icon,
};

export const icon = () => <Icon className="text-lg text-black" name="fas fa-dragon" />;
export const bigIcon = () => <Icon className="text-3xl text-black" name="fas fa-dragon" />;
