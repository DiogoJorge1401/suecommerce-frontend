import styled from 'styled-components';
import { mobile } from '~/utils/responsive';

export const Container = styled.div`
  height: 60vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;

  background-color: #fcf5f5;
`;

export const Title = styled.h1`
  font-size: 4.375rem;
`;

export const Description = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
  ${mobile({ textAlign: 'center' })}
`;

export const InputContainer = styled.div`
  width: 50%;
  height: 2.5rem;

  display: flex;
  justify-content: space-between;

  background-color: #fff;
  border: 1px solid #d3d3d3;

  ${mobile({ width: '80%' })}
`;

export const Input = styled.input`
  flex: 8;
  padding: 0 1rem;
`;

export const Button = styled.button`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: teal;
  color: #fff;
`;
