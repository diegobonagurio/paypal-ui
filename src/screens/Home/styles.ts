import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { ms } from 'react-native-size-matters';

import { colors } from '../../constraints';

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
