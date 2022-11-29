import { SendOutlined } from '@mui/icons-material';
import { Button, Container, Description, Input, InputContainer, Title } from './Components';

export const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>

      <Description>Get timely updates from your favorite products.</Description>

      <InputContainer>
        <Input placeholder='Your email...' />

        <Button>
          <SendOutlined />
        </Button>
      </InputContainer>
    </Container>
  );
};
