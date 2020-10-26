import React from 'react';

import { Container, Logo, Wrapper, Title, Hour, Price } from './styles';

interface ActivityItemProps {
  data: {
    logo?: string;
    title?: string;
    hour?: string;
    price?: number;
    type?: string;
  };
}
const ActivityItem: React.FC<ActivityItemProps> = ({ data }) => (
  <Container>
    <Logo source={data.logo} />
    <Wrapper>
      <Title>{data.title}</Title>
      <Hour>{data.hour}</Hour>
    </Wrapper>
    {data.type === 'positive' ? (
      <Price type={data.type}>
        +$
        {data.price}
      </Price>
    ) : (
      <Price type={data.type}>
        -$
        {data.price}
      </Price>
    )}
  </Container>
);

export default ActivityItem;
