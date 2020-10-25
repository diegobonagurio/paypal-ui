import React from 'react';

import { Container, Label } from './styles';

interface CustomProps {
  size: number;
  color: string;
  text: string;
}

const CustomTab: React.FC<CustomProps> = ({
 size, color, text, children
}) => (
  <Container>
    {children}
    <Label size={size} color={color}>
      {text}
    </Label>
  </Container>
);

export default CustomTab;
