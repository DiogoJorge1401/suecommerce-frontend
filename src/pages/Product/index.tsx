import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { publicRequest } from '~/api/axios';
import { IProduct } from '~/interfaces/Product';
import { addProduct } from '~/redux/reducers/cart';
import {
  AddButton,
  AddContainer,
  Amount,
  AmountContainer,
  Button,
  Container,
  Description,
  Filter,
  FilterColor,
  FilterColorContainer,
  FilterContainer,
  FilterSize,
  FilterSizeOption,
  FilterTitle,
  Image,
  ImageContainer,
  InfoContainer,
  Price,
  RemoveButton,
  Title,
  Wrapper,
} from './Components';

export const Product = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<IProduct>({} as unknown as IProduct);
  const [color, setColor] = useState<string>('');
  const [size, setSize] = useState<string>('');

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await publicRequest.get(`/products/${id}`);
        setProduct(data);
        setColor(data.color[0]);
        setSize(data.size[0]);
      } catch (error) {
        navigate('/');
      }
    })();
  }, [id, navigate]);

  const handleAmountChange = (op: string) => () => {
    if (op === 'decrease') return setQuantity((p) => (p === 1 ? p : p - 1));
    setQuantity((p) => p + 1);
  };

  const handleClick = () => {
    dispatch(
      addProduct({
        ...product,
        quantity,
        color,
        size,
      }),
    );
  };

  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>

        <InfoContainer>
          <Title>{product.title}</Title>

          <Description>{product.description}</Description>

          <Price>$ {product.price}</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>

              <FilterColorContainer>
                {product.color?.map((c, idx) => (
                  <FilterColor color={c} key={idx} onClick={() => setColor(c)} />
                ))}
              </FilterColorContainer>
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>

              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s, idx) => (
                  <FilterSizeOption key={idx}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <RemoveButton onClick={handleAmountChange('decrease')} />

              <Amount>{quantity}</Amount>

              <AddButton onClick={handleAmountChange('increase')} />
            </AmountContainer>

            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};
