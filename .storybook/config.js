import { withA11y } from '@storybook/addon-a11y';
import { configure, addDecorator } from '@storybook/react';

import './storybook.css';

addDecorator(withA11y);

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);
