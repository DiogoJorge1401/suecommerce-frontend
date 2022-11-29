import styled from 'styled-components';
import { mobile } from '~/utils/responsive';

export const Container = styled.div`
  height: calc(100vh - var(--announcement-normal-height) - var(--nav-normal-height));
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: 'none' })}
`;

export const Arrow = styled.div<{ direction: string }>`
  width: 3.125rem;
  height: 3.125rem;
  z-index: 2;

  position: absolute;
  top: 50%;
  left: ${({ direction }) => direction === 'left' && '.625rem'};
  right: ${({ direction }) => direction === 'right' && '.625rem'};
  transform: translateY(-50%);

  cursor: pointer;

  background-color: rgb(255, 247, 247);
  opacity: 0.5;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: var(--animation);

  &:hover {
    background-color: rgb(226, 219, 219);
  }
`;

export const Wrapper = styled.div<{ slideIndex: number }>`
  height: 100%;

  display: flex;
  transform: translateX(${({ slideIndex }) => slideIndex * -100}vw);

  transition: 1.5s ease;
`;

export const Slide = styled.div<{ bg: string }>`
  width: 100vw;
  height: 100%;

  display: flex;
  align-items: center;

  background-color: ${({ bg }) => '#' + bg};
`;

export const ImgContainer = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  margin: auto;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 3.125rem;

  display: flex;
  flex-direction: column;
  gap: 3.125rem;
`;

export const Title = styled.h1`
  font-size: 4.375rem;
`;

export const Description = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 3px;
`;

export const Button = styled.button`
  width: max-content;
  padding: 0.625rem;

  border: 1px solid;
  background-color: transparent;
`;
