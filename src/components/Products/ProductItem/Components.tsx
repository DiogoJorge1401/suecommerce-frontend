import { SearchOutlined } from '@mui/icons-material';
import styled from 'styled-components';
import { mobile } from '~/utils/responsive';

export const Info = styled.div`
  opacity: 0;
  position: absolute;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;

  background-color: rgba(0, 0, 0, 0.2);

  z-index: 3;
  transition: var(--animation);
`;

export const Container = styled.div`
  overflow: hidden;
  position: relative;

  flex: 1;
  cursor: pointer;

  height: 22.5rem;
  min-width: 17.5rem;
  max-width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #f5fbfd;

  &:hover ${Info} {
    opacity: 1;
  }

  ${mobile({ maxWidth: '100%' })}
`;

export const Circle = styled.div`
  width: 12.5rem;
  height: 12.5rem;

  position: absolute;

  border-radius: 50%;

  background-color: #fff;
`;

export const Image = styled.img`
  height: 75%;

  object-fit: contain;
  z-index: 2;

  @media screen and (max-width: 768px) {
    width: 75%;
  }
`;

export const Icon = styled.div`
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: #fff;

  cursor: pointer;
  transition: var(--animation);

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
export const SearchIcon = styled(SearchOutlined)`
  color: #000;
`;
