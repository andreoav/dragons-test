import React from 'react';
import { navigate } from '@reach/router';
import { render, wait, fireEvent } from '@testing-library/react';

import ListPage from './List';
import useRequest from '../../../utils/useRequest';

import { removeDragon } from '../../../api/dragons';
import { useAuthState } from '../../../providers/Auth';

jest.mock('@reach/router');
jest.mock('../../../api/dragons');
jest.mock('../../../providers/Auth');
jest.mock('../../../utils/useRequest');

describe('List dragon container', () => {
  test('list all the dragons', async () => {
    useRequest.mockReturnValue({
      data: [
        {
          id: 1,
          name: 'Dragon B',
          type: 'Bronze dragon',
          createdAt: '2019-12-16T18:23:38.277Z',
        },
        {
          id: 2,
          name: 'Dragon A',
          type: 'Bronze dragon',
          createdAt: '2019-12-16T18:23:38.277Z',
        },
      ],
      revalidate: jest.fn(),
    });

    useAuthState.mockReturnValue({ isAuthenticated: true });
    removeDragon.mockResolvedValueOnce({ status: 200, data: null });

    const { getByText, findAllByRole, getAllByText } = render(<ListPage />);

    const elements = await findAllByRole('listitem');

    expect(elements.length).toBe(2);
    expect(elements[0]).toContainElement(getByText(/dragon a/i));
    expect(elements[0]).not.toContainElement(getByText(/dragon b/i));
    expect(elements[1]).not.toContainElement(getByText(/dragon a/i));
    expect(elements[1]).toContainElement(getByText(/dragon b/i));

    fireEvent.click(getAllByText(/edit/i)[0]);
    expect(navigate).toBeCalledWith('dragons/2/edit');

    fireEvent.click(getAllByText(/remove/i)[0]);
    await wait(() => expect(removeDragon).toHaveBeenCalledWith(2));
  });
});
