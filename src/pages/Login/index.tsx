import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '~/redux/actions/user';
import {
  Button,
  Container,
  Error,
  Form,
  FormLink,
  Input,
  Links,
  Title,
  Wrapper,
} from './Components';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isFetching, error } = useSelector((s: any) => s.user);

  const handleClick = async (e: any) => {
    e.preventDefault();

    if (!username || !password) return;

    const res = await login(dispatch, { username, password });

    if (!res) return;

    navigate('/');
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>

        <Form>
          <Input
            placeholder='username'
            value={username}
            onChange={(e) => setUsername(e.target.value.trim())}
          />

          <Input
            type='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value.trim())}
          />

          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>

          {error && <Error>Something went wrong...</Error>}

          <Links>
            <FormLink to='/'>DO NOT YOU REMEMBER THE PASSWORD?</FormLink>

            <FormLink to='/'>CREATE A NEW ACCOUNT?</FormLink>
          </Links>
        </Form>
      </Wrapper>
    </Container>
  );
};
