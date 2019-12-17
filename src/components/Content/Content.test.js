import React from 'react';
import { render } from '@testing-library/react';

import { Content } from './Content';

describe('Content component', () => {
  test('basic snapshot', () => {
    const { container } = render(<Content />);

    expect(container).toMatchInlineSnapshot(`
      .emotion-0 {
        max-width: 32rem;
        margin-left: auto;
        margin-right: auto;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
      }

      <div>
        <main
          class="emotion-0 emotion-1"
        />
      </div>
    `);
  });
});
