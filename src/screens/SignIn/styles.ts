import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { ms } from 'react-native-size-matters';

import { colors, sizes, fonts } from '../../constraints';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background: ${colors.gray};
  padding: ${ms(16)}px;
`;

export const Wrapper = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : undefined,
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  margin-top: ${ms(32)}px;
  margin-bottom: ${ms(98)}px;
`;

export const HaveProblem = styled.TouchableNativeFeedback``;
export const HaveProblemText = styled.Text`
  color: ${colors.blackWithOpacity};
  font-family: ${fonts.ManropeRegular};
  font-size: ${sizes.small};
  margin-top: ${ms(32)}px;
  margin-bottom: ${ms(32)}px;
`;

export const SignUp = styled.TouchableNativeFeedback``;
export const SignUpText = styled.Text`
  color: ${colors.blackWithOpacity};
  font-family: ${fonts.ManropeRegular};
  font-size: ${sizes.small};
  margin-bottom: ${ms(32)}px;
`;
