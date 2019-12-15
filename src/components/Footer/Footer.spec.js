import React from 'react';

import { render } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer component', () => {
  it('basic snapshot', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchInlineSnapshot();
  });
});
