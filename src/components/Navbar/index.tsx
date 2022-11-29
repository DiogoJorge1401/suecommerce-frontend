import { ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '~/redux/reducers/user';
import {
  Center,
  Container,
  Input,
  Language,
  Left,
  Logo,
  MenuItem,
  Right,
  SearchContainer,
  SearchIcon,
  Wrapper,
} from './Components';

export const Navbar = () => {
  const { currentUser } = useSelector((s: any) => s.user);
  const quantity = useSelector((s: any) => s.cart.quantity);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>

          <SearchContainer>
            <Input placeholder='search' />

            <SearchIcon />
          </SearchContainer>
        </Left>

        <Center>
          <Logo>SUEG.</Logo>
        </Center>

        <Right>
          {!currentUser ? (
            <>
              <MenuItem to='/register'>REGISTER</MenuItem>

              <MenuItem to='/login'>SIGN IN</MenuItem>
            </>
          ) : (
            <MenuItem to='/' onClick={handleClick}>
              LOGOUT
            </MenuItem>
          )}

          <MenuItem to='/cart'>
            <Badge badgeContent={quantity} color='primary'>
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
