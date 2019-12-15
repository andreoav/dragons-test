import tw from 'tailwind.macro';
import styled from '@emotion/styled/macro';

export const Footer = styled.footer`
  ${tw`flex flex-col rounded-tr-lg rounded-br-lg`};

  > {
    &:last-of-type {
      ${tw`flex-1 rounded-none rounded-br-lg`};
    }
    &:first-of-type {
      ${tw`flex-1 rounded-none rounded-tr-lg`};
    }
  }
`;
