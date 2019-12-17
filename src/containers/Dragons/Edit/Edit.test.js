import React from 'react';
import { navigate } from '@reach/router';
import { wait, render, fireEvent } from '@testing-library/react';

import EditPage from './Edit';
import useRequest from '../../../utils/useRequest';
import { editDragon } from '../../../api/dragons';

jest.mock('@reach/router');
jest.mock('../../../api/dragons');
jest.mock('../../../utils/useRequest');

describe('Edit dragon container', () => {
  test('edits a dragon', async () => {
    editDragon.mockResolvedValue({ data: {}, status: 200 });
    useRequest.mockReturnValue({ data: { name: 'Some dragon', type: 'Some type' } });

    const { getByText, getByPlaceholderText } = render(<EditPage dragonId={123} />);

    expect(getByPlaceholderText(/dragon name/i)).toHaveValue('Some dragon');
    expect(getByPlaceholderText(/dragon type/i)).toHaveValue('Some type');

    fireEvent.change(getByPlaceholderText(/dragon name/i), {
      target: { value: 'New dragon name' },
    });

    fireEvent.change(getByPlaceholderText(/dragon type/i), {
      target: { value: 'New dragon type' },
    });

    fireEvent.click(getByText(/^edit$/i));

    await wait(() => {
      expect(editDragon).toHaveBeenCalledWith(123, {
        name: 'New dragon name',
        type: 'New dragon type',
      });

      expect(navigate).toHaveBeenCalledWith('/dragons/123');
    });
  });

  test('triggers the validation and does not creates a new dragon', async () => {
    const { getByText, getByPlaceholderText } = render(<EditPage />);

    fireEvent.change(getByPlaceholderText(/dragon name/i), { target: { value: '' } });
    fireEvent.change(getByPlaceholderText(/dragon type/i), { target: { value: '' } });
    fireEvent.click(getByText(/^edit$/i));

    await wait(() => {
      expect(navigate).not.toHaveBeenCalled();
      expect(editDragon).not.toHaveBeenCalled();
    });

    expect(getByPlaceholderText(/dragon name/i)).toHaveClass('with-error');
    expect(getByPlaceholderText(/dragon type/i)).toHaveClass('with-error');
  });
});
