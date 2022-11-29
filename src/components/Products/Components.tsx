import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.25rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.625rem;

  @media screen and (max-width: 768px) {
    justify-content: space-around;
  }
  @media screen and (max-width: 425px) {
    justify-content: center;
  }
`;
