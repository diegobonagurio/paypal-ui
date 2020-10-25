import styled from 'styled-components/native';
import { ms } from 'react-native-size-matters';

import { colors, sizes, fonts } from '../../constraints';

export const Container = styled.View`
  width: 100%;
  height: ${ms(56)}px;
  border: 1px solid ${colors.blackWithOpacity};
  margin-bottom: ${ms(16)}px;
  border-radius: ${ms(20)}px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  text-align: center;
  color: ${colors.black};
  font-family: ${fonts.ManropeRegular};
  font-size: ${sizes.small};
`;
