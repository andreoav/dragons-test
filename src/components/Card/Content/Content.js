import tw from 'tailwind.macro';
import styled from '@emotion/styled/macro';

import { Text } from 'components/Text';

export const Content = styled.div`
  ${Text} {
    ${tw`text-gray-900`};
  }

  ${tw`flex-1 p-4 sm:p-6`};
`;
