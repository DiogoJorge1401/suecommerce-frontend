import StripeCheckout from 'react-stripe-checkout';
import { Button, Container } from './Components';

const StripeCheckoutComponent = StripeCheckout as unknown as any;

export const Payment = () => {
  return (
    <Container>
      {stripeToken ? (
        <span>Processing. Please wait...</span>
      ) : (
        <StripeCheckoutComponent>
          <Button>Pay now</Button>
        </StripeCheckoutComponent>
      )}
    </Container>
  );
};
