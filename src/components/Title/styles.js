import tw from 'tailwind.macro';
import styled from '@emotion/styled/macro';

export const Title = styled.h1`
  ${tw`text-bold text-2xl sm:text-3xl`};

  &.is-dark {
    ${tw`text-gray-900`};
  }
`;
