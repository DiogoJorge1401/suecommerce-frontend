import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '~/utils/responsive';

export const Image = styled.img`
  height: 100%;
  width: 100%;
  transition: var(--animation);
  ${mobile({
    height: '25vh',
    objectPosition: '0 -13rem',
  })}
`;

export const Info = styled.div`
  position: absolute;
  inset: 0;

  background-color: rgba(0, 0, 0, 0.2);
  transition: var(--animation);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
`;

export const Container = styled(Link)`
  flex: 1;
  height: 70vh;
  position: relative;
  overflow: hidden;

  &:hover {
    ${Image} {
      transform: scale(1.125);
    }

    ${Info} {
      background-color: rgba(0, 0, 0, 0);
    }
  }
`;

export const Title = styled.h1`
  color: #fff;
`;

export const Button = styled.button`
  padding: 0.625rem;

  background-color: #fff;
  color: #808080;
  font-weight: 600;

  border-radius: 0.25rem;

  transition: var(--animation);

  &:hover {
    color: #fff;
    background-color: #808080;
  }
`;
