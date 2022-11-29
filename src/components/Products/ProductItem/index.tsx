import { FavoriteBorderOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { IProduct } from '~/interfaces/Product';
import { Circle, Container, Icon, Image, Info, SearchIcon } from './Components';

interface ProductItemProps {
  product: IProduct;
}

export const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Container>
      <Circle />

      <Image src={product.img} />

      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>

        <Icon>
          <Link to={`/product/${product._id}`}>
            <SearchIcon />
          </Link>
        </Icon>

        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};
