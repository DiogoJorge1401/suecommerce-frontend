import { Button, Container, Image, Info, Title } from './Components';

interface ICategoryItem {
  id: number;
  img: string;
  title: string;
  cat: string;
}

export const CategoryItem = ({ img, title, cat }: ICategoryItem) => {
  return (
    <Container to={`/products/${cat}`}>
      <Image src={img} />

      <Info>
        <Title>{title}</Title>

        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};
