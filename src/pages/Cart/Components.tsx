import { AddOutlined, RemoveOutlined } from '@mui/icons-material';
import { default as rsc } from 'react-stripe-checkout';
import styled from 'styled-components';
import { mobile } from '~/utils/responsive';

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 1.25rem;

  display: flex;
  flex-direction: column;
  ${mobile({ padding: '1.25rem 0.625rem 0.625rem' })}
`;

export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  margin-bottom: 1.25rem;
`;

export const Top = styled.div`
  padding: 0 1.25rem;
  margin-bottom: 1.25rem;

  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TopButton = styled.button<{ type: any }>`
  padding: 1.25rem;

  border: ${({ type }) => type !== 'filled' && '1px solid black'};
  background-color: ${({ type }) => (type === 'filled' ? 'black' : 'transparent')};

  font-weight: 600;
  color: ${({ type }) => type === 'filled' && '#fff'};

  border-radius: 0.25rem;

  ${mobile({ padding: '.625rem' })}
`;

export const TopTexts = styled.div`
  display: flex;
  gap: 1.25rem;
  ${mobile({ display: 'none' })}
`;

export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  ${mobile({ flexDirection: 'column' })}
`;

export const Info = styled.div`
  flex: 3;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;

export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

export const Image = styled.img`
  width: 12.5rem;
`;

export const Details = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ProductName = styled.span``;

export const ProductId = styled.span``;

export const ProductColor = styled.div<{ color: string }>`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  box-shadow: 0 0 1.25px rgba(0, 0, 0, 1);
`;

export const ProductSize = styled.span``;

export const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.875rem;
`;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  ${mobile({ gap: '1.25rem' })}
`;

export const ProductAmount = styled.div`
  font-size: 1.5rem;
`;

export const ProductPrice = styled.div`
  font-size: 1.875rem;
  font-weight: 200;
  ${mobile({ marginBottom: '1.25rem' })}
`;

export const AddButton = styled(AddOutlined)`
  cursor: pointer;
`;

export const RemoveButton = styled(RemoveOutlined)`
  cursor: pointer;
`;

export const Hr = styled.hr`
  background-color: #eee;
  height: 1px;
`;

export const Summary = styled.div`
  height: max-content;
  min-height: 50vh;
  padding: 1.25rem;

  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  border: 0.5px solid lightgray;
  border-radius: 0.625rem;
`;

export const SummaryTitle = styled.h1`
  font-weight: 200;
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SummaryItemText = styled.span<{ type?: string }>`
  font-weight: ${({ type }) => type === 'total' && '500'};
  font-size: ${({ type }) => type === 'total' && '1.5rem'};
`;

export const SummaryItemPrice = styled.span``;

export const Button = styled.button`
  width: 100%;

  padding: 0.625rem;

  font-weight: 600;
  color: #fff;

  border-radius: 0.25rem;
  background-color: #000;
`;

export const StripeCheckout = styled(rsc)`` as any;
