import styled from 'styled-components';
import { mobile } from '~/utils/responsive';

export const Container = styled.div`
  height: var(--announcement-normal-height);

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #008080;
  color: #fff;

  font-size: 0.875rem;
  font-weight: 600;

  ${mobile({ height: 'var(--announcement-mobile-height)', padding: '.75rem 0' })}
`;
