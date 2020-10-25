import styled from 'styled-components/native';

interface LabelProps {
  size: number;
  color: string;
}

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text<LabelProps>`
  font-size: 12px;
  margin-left: 8px;
  color: ${({ color }) => color};
`;
