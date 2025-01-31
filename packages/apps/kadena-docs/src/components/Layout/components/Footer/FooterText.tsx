import { styled, Text } from '@kadena/react-components';

import React, { FC, ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const StyledText = styled('span', {
  color: '$neutral4',
  padding: '0 $3',
});

export const FooterText: FC<IProps> = ({ children }) => {
  return (
    <Text size="md" bold={false}>
      <StyledText>{children}</StyledText>
    </Text>
  );
};
