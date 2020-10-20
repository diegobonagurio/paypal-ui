import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { colors } from '../../constraints';

export const Container = styled.ScrollView`
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
  margin-top: 130px;
  margin-bottom: 98px;
`;
