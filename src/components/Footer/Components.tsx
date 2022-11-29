import styled from 'styled-components';
import { mobile } from '~/utils/responsive';

export const Container = styled.div`
  display: flex;
  padding: 1.25rem 1.25rem 4rem;
  gap: 2.5rem;
  ${mobile({ flexDirection: 'column', padding: '0' })}
`;

export const Left = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  ${mobile({ padding: '1.25rem' })}
`;

export const Logo = styled.h1``;

export const Description = styled.p`
  text-transform: initial;
`;

export const SocialContainer = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const SocialIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  cursor: pointer;

  color: #fff;
  background-color: ${({ color }) => color};

  transition: var(--animation);

  &:hover {
    background-color: #fff;
    color: ${({ color }) => color};
  }
`;

export const Center = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  ${mobile({ display: 'none' })}
`;

export const Title = styled.h3``;

export const List = styled.ul`
  height: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 0.625rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ListItem = styled.li``;

export const Right = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  ${mobile({
    backgroundColor: '#fff8f8',
    padding: '1.25rem',
  })}
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;
export const Payment = styled.img`
  width: 50%;
`;
