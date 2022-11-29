import { SearchOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '~/utils/responsive';

export const Container = styled.div`
  height: var(--nav-normal-height);
  ${mobile({ height: 'var(--nav-mobile-height)' })}
`;

export const Wrapper = styled.div`
  padding: 0.625rem 1.25rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  ${mobile({ padding: '.625rem' })}
`;

export const Left = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  gap: 1.5rem;
  ${mobile({ justifyContent: 'center' })}
`;

export const Language = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`;

export const SearchContainer = styled.div`
  padding: 0.25rem;

  border: 0.5px solid lightgray;

  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  ${mobile({ width: '4rem' })}
  ${mobile({ fontSize: '0.75rem' })}
`;

export const SearchIcon = styled(SearchOutlined)`
  color: #808080;
  font-size: 1rem !important;
  cursor: pointer;
`;

export const Center = styled.div`
  flex: 1;
  text-align: center;
`;

export const Logo = styled.h1`
  font-weight: 800;
  letter-spacing: 3px;
  ${mobile({ fontSize: '1.5rem' })}
`;

export const Right = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.5rem;
  ${mobile({
    justifyContent: 'center',
    gap: '.625rem',
    flex: '1.2',
  })}
`;

export const MenuItem = styled(Link)`
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  color: #000;
  ${mobile({ fontSize: '0.725rem' })}
`;
