import { AddOutlined, RemoveOutlined } from '@mui/icons-material';
import styled from 'styled-components';
import { mobile } from '~/utils/responsive';

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 3.125rem;
  display: flex;
  gap: 3.125rem;
  ${mobile({ flexDirection: 'column', padding: '1.5rem', gap: '1.5rem' })}
`;

export const ImageContainer = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  height: calc(100vh - var(--announcement-normal-height) - var(--nav-normal-height) - 3.125rem);
  width: 100%;
  object-fit: contain;
  ${mobile({
    height: 'calc(100vh - var(--announcement-mobile-height) - var(--nav-mobile-height) - 1.5rem)',
  })}
`;

export const InfoContainer = styled.div`
  height: max-content;

  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media screen and (max-width: 768px) {
    align-items: center;
  }
  ${mobile({ gap: '1.5rem' })}
`;

export const Title = styled.h1`
  font-weight: 200;
`;

export const Description = styled.p``;

export const Price = styled.span`
  font-weight: 100;
  font-size: 2.5rem;
  letter-spacing: 0.375rem;
`;

export const FilterContainer = styled.div`
  width: 50%;

  display: flex;
  justify-content: space-between;
  gap: 1.25rem;

  ${mobile({ width: '100%' })}
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

export const FilterTitle = styled.span`
  font-size: 1.25rem;
  font-weight: 200;
`;

export const FilterColorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const FilterColor = styled.div<{ color: string }>`
  width: 1.25rem;
  height: 1.25rem;

  border-radius: 50%;
  background-color: ${({ color }) => color};

  cursor: pointer;
  box-shadow: 0 0 1.25px rgba(0, 0, 0, 1);
`;

export const FilterSize = styled.select`
  padding: 0.25rem;
  background-color: #fff;
  border: 1px solid #808080;
`;

export const FilterSizeOption = styled.option``;

export const AddContainer = styled.div`
  width: 50%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.25rem;

  ${mobile({ width: '100%' })}
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  font-weight: 700;
`;

export const RemoveButton = styled(RemoveOutlined)`
  cursor: pointer;
`;
export const AddButton = styled(AddOutlined)`
  cursor: pointer;
`;

export const Amount = styled.span`
  width: 1.875rem;
  height: 1.875rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.625rem;
  border: 1px solid teal;
`;

export const Button = styled.button`
  padding: 1rem;

  border: 2px solid teal;

  font-weight: 500;
  background-color: #fff;

  transition: var(--animation);

  &:hover {
    background-color: #f8f4f4;
  }
`;
