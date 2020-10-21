import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { colors, sizes, fonts } from '../../constraints';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background: ${colors.gray};
  padding: 16px;
`;

export const Wrapper = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : undefined,
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  margin-top: 32px;
  margin-bottom: 98px;
`;

export const HaveProblem = styled.TouchableNativeFeedback``;
export const HaveProblemText = styled.Text`
  color: ${colors.blackWithOpacity};
  font-family: ${fonts.ManropeRegular};
  font-size: ${sizes.small}px;
  margin: 32px 0px;
`;

export const SignUp = styled.TouchableNativeFeedback``;
export const SignUpText = styled.Text`
  color: ${colors.blackWithOpacity};
  font-family: ${fonts.ManropeRegular};
  font-size: ${sizes.small}px;
  margin-bottom: 32px;
`;
