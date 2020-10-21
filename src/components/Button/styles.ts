import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';
import { sizes, colors, fonts } from '../../constraints';

export const Container = styled(RectButton)`
  width: 100%;
  height: 64px;
  border-radius: 20px;

  background-color: ${colors.black};
`;

export const Wrapper = styled(LinearGradient)`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

export const ButtonText = styled.Text`
  font-size: ${sizes.regular}px;
  font-family: ${fonts.ManropeRegular};
  color: ${colors.white};
`;
