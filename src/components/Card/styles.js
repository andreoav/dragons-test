import tw from 'tailwind.macro';
import styled from '@emotion/styled/macro';

export const BaseCard = styled.div`
  &:hover {
    transform: scale(1.015);
  }

  transition: transform 0.15s ease-in;

  ${tw`flex flex-row rounded-lg bg-gray-100 shadow-md`};
`;
