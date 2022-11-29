import styled from 'styled-components';
import { mobile } from '~/utils/responsive';

export const Container = styled.div``;

export const Header = styled.div`
  padding: 1.25rem;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const Title = styled.h1``;

export const FilterContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  gap: 0.625rem;

  ${mobile({ justifyContent: 'flex-start' })}
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  ${mobile({
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'flex-start',
    flex: '1',
  })}
`;

export const FilterText = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
`;

export const Select = styled.select`
  padding: 0.625rem;
  background-color: #fff;
  border: 1px solid #808080;
  ${mobile({
    minWidth: '50%',
  })}
`;
export const Option = styled.option``;
