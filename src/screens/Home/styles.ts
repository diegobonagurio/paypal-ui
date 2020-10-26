import styled from 'styled-components/native';
import { ms } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import { colors, fonts, sizes, spacings } from '../../constraints';

interface CardProps {
  selected: boolean;
}

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background: ${colors.gray};
`;

export const Wrapper = styled(LinearGradient)`
  border-bottom-right-radius: ${ms(41)}px;
  height: ${ms(272)}px;
`;
export const Header = styled.ImageBackground`
  padding: ${ms(16)}px;
  height: ${ms(272)}px;
`;

export const HeaderWrapper = styled.View`
  margin-top: ${spacings.sixteen};
  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = styled.Image``;

export const Avatar = styled.Image`
  width: ${ms(52)}px;
  height: ${ms(52)}px;
  border-radius: 20px;
`;

export const Welcome = styled.Text`
  color: #5b91c8;
  font-family: ${fonts.ManropeRegular};
  font-size: ${sizes.regular};
  margin-top: ${spacings.twentyFour};
  margin-bottom: ${spacings.thirtyTwo};
`;

export const Balance = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.ManropeSemiBold};
  font-size: ${sizes.big};
`;

export const BalanceText = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.ManropeRegular};
  font-size: ${sizes.regular};
  margin-top: ${spacings.eight};
`;

export const Menu = styled.View`
  margin-top: ${spacings.twentyFour};
  flex-direction: row;
  align-items: center;
`;

export const Card = styled(LinearGradient)`
  height: ${ms(120)}px;
  width: ${ms(107)}px;

  border-radius: 20px;
  padding: ${ms(20)}px;
  margin-left: ${spacings.sixteen};
  margin-right: ${spacings.sixteen};
`;

export const CardText = styled.Text<CardProps>`
  max-width: ${ms(60)}px;
  color: ${({ selected }) => (selected ? colors.white : colors.primary)};
  font-family: ${fonts.ManropeSemiBold};
  font-size: ${sizes.small};
  margin-top: ${spacings.twentyFour};
`;

export const Heading = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  margin-left: 32px;
  margin-right: 32px;
`;

export const Title = styled.Text`
  color: ${colors.black};
  font-weight: bold;
  font-family: ${fonts.ManropeRegular};
  font-size: ${sizes.bold};
`;

export const Subtitle = styled.Text`
  color: ${colors.blackWithOpacity};
  font-family: ${fonts.ManropeRegular};
  font-size: ${sizes.small};
`;

export const Content = styled.View`
  padding: 32px;
`;
