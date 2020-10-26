import React, { useState, useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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
  Menu,
  Card,
  CardText,
} from './styles';

import logoSmall from '../../assets/logo-small.png';
import shadowPaypal from '../../assets/shadow.png';
import avatar from '../../assets/avatar.png';

const Home: React.FC = () => {
  const [selected, setSelected] = useState<String>('');

  const handleSelected = useCallback((value: String) => {
    setSelected(value);
  }, []);

  return (
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

      <Menu>
        <TouchableOpacity onPress={() => handleSelected('send')}>
          <Card
            colors={
              selected.includes('send')
                ? colors.radialGradient
                : ['#fff', '#fff']
            }
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
          >
            <Icon
              name="upload"
              size={25}
              color={selected.includes('send') ? colors.white : colors.primary}
            />
            <CardText selected={selected.includes('send')}>Send Money</CardText>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleSelected('request')}>
          <Card
            colors={
              selected.includes('request')
                ? colors.radialGradient
                : ['#fff', '#fff']
            }
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
          >
            <Icon
              name="download"
              size={25}
              color={
                selected.includes('request') ? colors.white : colors.primary
              }
            />
            <CardText selected={selected.includes('request')}>
              Request Payment
            </CardText>
          </Card>
        </TouchableOpacity>

        <MaterialIcons
          name="more-vert"
          size={25}
          color={colors.blackWithOpacity}
        />
      </Menu>
    </Container>
  );
};

export default Home;
