import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { colors } from '../../constraints';

import { Container, Wrapper, ButtonText } from './styles';

type ButtonProps = RectButtonProperties;
const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container {...rest}>
    <Wrapper
      colors={colors.radialGradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <ButtonText>{children}</ButtonText>
    </Wrapper>
  </Container>
);

export default Button;
