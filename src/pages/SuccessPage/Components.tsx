import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled(Link)`
  padding: 0.625rem;
  margin-top: 1.25rem;

  color: #000;
  border-radius: 0.25rem;
  border: 1px solid #000;
`;
