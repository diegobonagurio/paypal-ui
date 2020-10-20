import React from 'react';

import logo from '../../assets/logo.png';
import { Container, Wrapper, Logo } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
  <Container>
    <Wrapper>
      <Logo source={logo} />

      <Input placeholder="Enter your name or e-mail" />
      <Input placeholder="Password" />

      <Button>Log In</Button>
    </Wrapper>
  </Container>
);

export default SignIn;
