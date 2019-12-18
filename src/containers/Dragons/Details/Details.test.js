import React from 'react';
import { navigate } from '@reach/router';
import { render, wait, fireEvent } from '@testing-library/react';

import DetailsPage from './Details';
import useRequest from '../../../utils/useRequest';
import { removeDragon } from '../../../api/dragons';

jest.mock('@reach/router');
jest.mock('../../../api/dragons');
jest.mock('../../../utils/useRequest');

describe('Details dragon container', () => {
  test('list a dragon details', async () => {
    useRequest.mockReturnValue({
      data: {
        id: 123,
        name: 'Dragon one',
        type: 'Bronze dragon',
        createdAt: '2019-12-16T18:23:38.277Z',
      },
    });

    removeDragon.mockResolvedValueOnce({ status: 200, data: null });

    const { getByText } = render(<DetailsPage dragonId={123} />);

    await wait(() => {
      expect(getByText('Dragon one')).toBeVisible();
      expect(getByText('Bronze dragon')).toBeVisible();
      expect(getByText(/Dec 16, 2019/i)).toBeVisible();
    });

    fireEvent.click(getByText(/edit/i));
    expect(navigate).toBeCalledWith('123/edit');

    fireEvent.click(getByText(/remove/i));

    await wait(() => {
      expect(removeDragon).toHaveBeenCalledWith(123);
      expect(navigate).toBeCalledWith('/dragons');
    });
  });
});
