import tw from 'tailwind.macro';
import styled from '@emotion/styled/macro';

export const Input = styled.input`
  ${tw`text-gray-900 font-bold tracking-wider text-lg`};
  ${tw`w-full p-4 rounded border-2 border-gray-400`};

  &.with-error {
    ${tw`border-red-400 text-red-400 bg-red-100`};
  }

  &:focus {
    ${tw`outline-none shadow-outline`};
  }

  &:disabled {
    ${tw`cursor-not-allowed bg-gray-200`};
  }
`;
