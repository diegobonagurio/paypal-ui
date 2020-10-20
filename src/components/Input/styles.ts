import styled from 'styled-components/native';
import { colors, sizes, fonts } from '../../constraints';

export const Container = styled.View`
  width: 100%;
  height: 56px;
  border: 1px solid ${colors.blackWithOpacity};
  margin-bottom: 16px;
  border-radius: 20px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  text-align: center;
  color: ${colors.black};
  font-family: ${fonts.ManropeRegular};
  font-size: ${sizes.small}px;
`;
