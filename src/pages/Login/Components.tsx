import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '~/utils/responsive';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
      center;
  background-size: cover;
`;

export const Wrapper = styled.div`
  width: 30%;
  padding: 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;

  border-radius: 0.25rem;
  background-color: #fff;

  @media screen and (max-width: 768px) {
    width: 50%;
  }

  ${mobile({ width: '75%' })}
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 300;
`;

export const Form = styled.form`
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 0.625rem;

  border: 1px solid #000;
  border-radius: 0.25rem;

  text-transform: initial;
`;

export const Button = styled.button`
  width: 40%;
  padding: 1rem 1.25rem;

  border-radius: 0.25rem;
  background-color: rgb(0, 128, 128);
  color: #fff;

  transition: 0.3s;

  &[disabled] {
    position: relative;
    cursor: not-allowed;
    background-color: rgb(0, 80, 80);
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

export const FormLink = styled(Link)`
  padding-bottom: 0.125rem;
  width: max-content;

  border-bottom: 1px solid #fff;
  font-size: 0.75rem;
  color: #000;

  transition: var(--animation);

  &:hover {
    border-bottom: 1px solid #808080;
  }
`;

export const Error = styled.p`
  color: red;
`;
