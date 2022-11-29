import styled from 'styled-components';
import { mobile } from '~/utils/responsive';

export const Container = styled.div`
  padding: 1.25rem;

  display: flex;
  justify-content: space-between;
  gap: 0.25rem;

  ${mobile({
    flexDirection: 'column',
    padding: '0',
  })}
`;
