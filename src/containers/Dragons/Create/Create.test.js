import React from 'react';
import { navigate } from '@reach/router';
import { render, fireEvent, wait } from '@testing-library/react';

import CreatePage from './Create';
import { createDragon } from '../../../api/dragons';

jest.mock('@reach/router');
jest.mock('../../../api/dragons');

describe('Create dragon container', () => {
  test('creates a new dragon', async () => {
    createDragon.mockResolvedValueOnce({ data: {}, status: 201 });

    const { getByText, getByPlaceholderText } = render(<CreatePage />);

    fireEvent.change(getByPlaceholderText(/dragon name/i), {
      target: { value: 'Dragon name' },
    });

    fireEvent.change(getByPlaceholderText(/dragon type/i), {
      target: { value: 'Dragon type' },
    });

    await wait(() => {
      expect(getByPlaceholderText(/dragon name/i)).toHaveValue('Dragon name');
      expect(getByPlaceholderText(/dragon type/i)).toHaveValue('Dragon type');
    });

    fireEvent.click(getByText(/^create$/i));

    await wait(() => {
      expect(createDragon).toHaveBeenCalledWith({
        name: 'Dragon name',
        type: 'Dragon type',
      });

      expect(navigate).toHaveBeenCalledWith('/dragons');
    });
  });

  test('triggers the validation and does not creates a new dragon', async () => {
    const { getByText, getByPlaceholderText } = render(<CreatePage />);

    fireEvent.click(getByText(/^create$/i));

    await wait(() => {
      expect(navigate).not.toHaveBeenCalled();
      expect(createDragon).not.toHaveBeenCalled();
    });

    expect(getByPlaceholderText(/dragon name/i)).toHaveClass('with-error');
    expect(getByPlaceholderText(/dragon type/i)).toHaveClass('with-error');
  });
});
