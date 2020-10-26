import styled from 'styled-components/native';
import { colors, fonts, sizes } from '../../constraints';

interface PriceProps {
  type: string;
}
export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 24px;
  background: ${colors.white};
  border-radius: 20px;
  align-items: center;
`;

export const Logo = styled.Image``;

export const Wrapper = styled.View``;

export const Title = styled.Text`
  color: ${colors.black};
  font-family: ${fonts.ManropeRegular};
  font-size: ${sizes.regular};
`;

export const Hour = styled.Text`
  color: ${colors.blackWithOpacity};
  font-family: ${fonts.ManropeRegular};
  font-size: ${sizes.small};
`;

export const Price = styled.Text<PriceProps>`
  color: ${({ type }) => (type === 'positive' ? colors.green : colors.red)};
  font-family: ${fonts.ManropeSemiBold};
  font-size: ${sizes.regular};
`;
