import React from 'react';

import { render } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer component', () => {
  it('basic snapshot', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchInlineSnapshot(`
      .emotion-0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        color: #f7fafc;
      }

      .emotion-0 >:not(:last-child) {
        margin-right: 0.5rem;
      }

      <div>
        <footer
          class="emotion-0 emotion-1"
        />
      </div>
    `);
  });
});
