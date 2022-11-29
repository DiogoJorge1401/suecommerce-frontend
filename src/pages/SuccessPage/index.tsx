import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authenticatedRequest } from '~/api/axios';
import { Button, Container } from './Components';

export const SuccessPage = () => {
  const [orderId, setOrderId] = useState<string>();
  const location = useLocation() as any;

  const data = location.state?.stripeData;
  const cart = location.state?.products;

  useEffect(() => {
    if (!data) return;

    (async () => {
      const res = await authenticatedRequest.post('/orders', {
        products: cart.products.map((item: any) => ({
          productId: item._id,
          quantity: item._quantity,
        })),
        amount: cart.total,
        address: data.billing_details.address,
      });

      setOrderId(res.data._id);
    })();
  }, [cart.products, cart.total, data]);

  if (!location.state) return <Navigate to='/' replace />;

  return (
    <Container>
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <Button to='/' replace>
        Go to Homepage
      </Button>
    </Container>
  );
};
