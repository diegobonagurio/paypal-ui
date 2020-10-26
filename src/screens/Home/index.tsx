import React from 'react';
import { colors } from '../../constraints';

import {
  Container,
  Wrapper,
  Header,
  HeaderWrapper,
  Logo,
  Avatar,
  Welcome,
  Balance,
  BalanceText,
} from './styles';

import logoSmall from '../../assets/logo-small.png';
import shadowPaypal from '../../assets/shadow.png';
import avatar from '../../assets/avatar.png';

const Home: React.FC = () => (
  <Container>
    <Wrapper
      colors={colors.radialGradient}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
    >
      <Header
        source={shadowPaypal}
        resizeMethod="auto"
        imageStyle={{
          width: '110%',
          height: '120%',
          resizeMode: 'cover',
          left: -80,
          top: 0,
          position: 'absolute',
        }}
      >
        <HeaderWrapper>
          <Logo source={logoSmall} />
          <Avatar source={avatar} />
        </HeaderWrapper>
        <Welcome>Hello, Vadim!</Welcome>

        <Balance>$ 272.30</Balance>
        <BalanceText>Your Balance</BalanceText>
      </Header>
    </Wrapper>
  </Container>
);

export default Home;
