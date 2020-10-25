import styled from 'styled-components/native';
import { ms } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';

import { sizes, colors, fonts } from '../../constraints';

export const Container = styled(RectButton)`
  width: 100%;
  height: ${ms(64)}px;
  border-radius: ${ms(20)}px;

  background-color: ${colors.black};
`;

export const Wrapper = styled(LinearGradient)`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: ${ms(20)}px;
`;

export const ButtonText = styled.Text`
  font-size: ${sizes.regular};
  font-family: ${fonts.ManropeRegular};
  color: ${colors.white};
`;
