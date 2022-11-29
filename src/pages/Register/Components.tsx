import styled from 'styled-components';
import { mobile } from '~/utils/responsive';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
      center;
  background-size: cover;
`;

export const Wrapper = styled.div`
  width: 50%;
  padding: 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;

  border-radius: 0.25rem;
  background-color: #fff;

  ${mobile({ width: '75%' })}
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 300;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem 10%;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 0.625rem;

  border: 1px solid #000;
  border-radius: 0.25rem;
`;

export const Agreement = styled.span`
  font-size: 0.75rem;
  text-transform: initial;
`;

export const Button = styled.button`
  width: 40%;
  padding: 1rem 1.25rem;

  border-radius: 0.25rem;
  background-color: teal;
  color: #fff;
`;
