import { ReactNode, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authenticatedRequest } from '~/api/axios';
import { STRIPE_KEY } from '~/config/stripe';
import { clean, updateProduct } from '~/redux/reducers/cart';
import {
  AddButton,
  Bottom,
  Button,
  Container,
  Details,
  Hr,
  Image,
  Info,
  PriceDetail,
  Product,
  ProductAmount,
  ProductAmountContainer,
  ProductColor,
  ProductDetail,
  ProductId,
  ProductName,
  ProductPrice,
  ProductSize,
  RemoveButton,
  StripeCheckout,
  Summary,
  SummaryItem,
  SummaryItemPrice,
  SummaryItemText,
  SummaryTitle,
  Title,
  Top,
  TopButton,
  TopText,
  TopTexts,
  Wrapper,
} from './Components';

export const Cart = () => {
  const { currentUser } = useSelector((s: any) => s.user);
  const cart = useSelector((s: any) => s.cart);
  const [stripeToken, setStripeToken] = useState<{ id: string } | null>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!stripeToken || cart.total <= 0) return;

    const makeRequest = async () => {
      try {
        const { data } = await authenticatedRequest.post('/stripe/payment', {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });

        setStripeToken(null);

        navigate('/success', { state: { stripeData: data, products: cart } });

        dispatch(clean());
      } catch (error) {
        console.log(error);
      }
    };

    makeRequest();
  }, [stripeToken, cart.total, cart, navigate, dispatch]);

  const onClick = (e: any) => {
    if (!currentUser) {
      e.preventDefault();
      e.stopPropagation();
      navigate('/login');
    }
  };

  const onToken = (token: any) => {
    if (cart.total > 0) return setStripeToken(token);
    navigate('/login');
  };

  const handleChangeQuantity = (el: any, idx: number, op: '+' | '-') => {
    if (op === '+') dispatch(updateProduct({ idx, newQnt: el.quantity + 1, price: el.price }));
    else dispatch(updateProduct({ idx, newQnt: el.quantity - 1, price: el.price }));
  };

  const CheckoutButton = ({ children }: { children: ReactNode }) => (
    <StripeCheckout
      name='SuEcommerce'
      image='https://avatars.githubusercontent.com/u/83793521'
      billingAddress
      shippingAddress
      description={`Your total is $${cart.total}`}
      amount={cart.total * 100}
      token={onToken}
      stripeKey={STRIPE_KEY}
    >
      {children}
    </StripeCheckout>
  );

  return (
    <Container>
      <Wrapper>
        <Title>YOUR BAG</Title>

        <Top>
          <TopButton type='button'>CONTINUE SHOPPING</TopButton>

          <TopTexts>
            <TopText>Shopping Bag({cart.quantity})</TopText>

            <TopText>Your Wishlist</TopText>
          </TopTexts>

          <CheckoutButton>
            <TopButton type='filled' onClick={onClick}>
              CHECKOUT NOW
            </TopButton>
          </CheckoutButton>
        </Top>

        <Bottom>
          <Info>
            {cart.products.map((el: any, idx: number) => (
              <div key={idx}>
                <Product>
                  <ProductDetail>
                    <Image src={el.img} />

                    <Details>
                      <ProductName>
                        <strong>Product:</strong> {el.title}
                      </ProductName>

                      <ProductId>
                        <strong>ID:</strong> {el._id}
                      </ProductId>

                      <ProductColor color={el.color} />

                      <ProductSize>
                        <strong>Size:</strong> {el.size}
                      </ProductSize>
                    </Details>
                  </ProductDetail>

                  <PriceDetail>
                    <ProductAmountContainer>
                      <AddButton onClick={() => handleChangeQuantity(el, idx, '+')} />

                      <ProductAmount>{el.quantity}</ProductAmount>

                      <RemoveButton onClick={() => handleChangeQuantity(el, idx, '-')} />
                    </ProductAmountContainer>

                    <ProductPrice>$ {el.price * el.quantity}</ProductPrice>
                  </PriceDetail>
                </Product>
                <Hr />
              </div>
            ))}
          </Info>

          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>

            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>

              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>

              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>

              <SummaryItemPrice>-$ 5.90</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText type='total'>Total</SummaryItemText>

              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>

            <CheckoutButton>
              <Button onClick={onClick}>CHECKOUT NOW</Button>
            </CheckoutButton>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};
