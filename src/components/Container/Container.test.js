import React from 'react';
import { render } from '@testing-library/react';

import { Container } from './Container';

describe('Content component', () => {
  test('basic snapshot', () => {
    const { container } = render(<Container />);

    expect(container).toMatchInlineSnapshot(`
      .emotion-0 {
        min-height: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        background-color: #1a202c;
      }

      <div>
        <div
          class="emotion-0 emotion-1"
        />
      </div>
    `);
  });
});
