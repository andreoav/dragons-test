import tw from 'tailwind.macro';
import styled from '@emotion/styled/macro';

export const Button = styled.button`
  &:focus {
    outline: none;
  }

  &:disabled,
  &:disabled:hover {
    ${tw`bg-gray-200 border-gray-400`};
    ${tw`text-gray-400 cursor-not-allowed`};
  }

  ${tw`flex items-center justify-center`};
  ${tw`py-4 px-8 rounded outline-none focus:shadow-outline`};
  ${tw`font-bold text-gray-100 bg-blue-700`};
  ${tw`border border-blue-700 border-2`};
  ${tw`hover:bg-blue-800 hover:border-blue-800`};

  &.is-danger {
    ${tw`text-gray-100 bg-red-700 border-red-700`};
    ${tw`hover:bg-red-800 hover:border-red-800`};
  }
`;
