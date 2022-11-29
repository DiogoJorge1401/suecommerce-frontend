import {
  FacebookOutlined,
  Instagram,
  MailOutlined,
  PhoneOutlined,
  Pinterest,
  RoomOutlined,
  Twitter,
} from '@mui/icons-material';
import {
  Center,
  ContactItem,
  Container,
  Description,
  Left,
  List,
  ListItem,
  Logo,
  Payment,
  Right,
  SocialContainer,
  SocialIcon,
  Title,
} from './Components';

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SUEG.</Logo>

        <Description>
          There are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injected humour, or randomised words which don’t look
          even slightly believable.
        </Description>

        <SocialContainer>
          <SocialIcon color='#3b5999'>
            <FacebookOutlined />
          </SocialIcon>

          <SocialIcon color='#e4405f'>
            <Instagram />
          </SocialIcon>

          <SocialIcon color='#55acee'>
            <Twitter />
          </SocialIcon>

          <SocialIcon color='#e60023'>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>

        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>

        <ContactItem>
          <RoomOutlined />
          622 Dixie Path, South Tobinchester 98336
        </ContactItem>

        <ContactItem>
          <PhoneOutlined />
          +1 234 56 78
        </ContactItem>

        <ContactItem>
          <MailOutlined />
          contact@sueg.oid
        </ContactItem>

        <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
      </Right>
    </Container>
  );
};
