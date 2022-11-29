import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  _id: string;
  title: string;
  description: string;
  categories: Array<string>;
  img: string;
  inStock: boolean;
  price: number;
}

interface CartState {
  products: Array<Product & { quantity: number; color: string; size: string }>;
  quantity: number;
  total: number;
}

interface AddProductPayload extends Product {
  quantity: number;
  color: string;
  size: string;
}

const initialState: CartState = {
  products: [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, { payload }: PayloadAction<AddProductPayload>) {
      state.quantity += payload.quantity;
      state.products.push(payload);
      state.total += payload.price * payload.quantity;
    },
    updateProduct(
      state,
      {
        payload: { idx, newQnt, price },
      }: PayloadAction<{ idx: number; newQnt: number; price: number }>,
    ) {
      if (newQnt === 0) {
        state.products.splice(idx, 1);
        state.total -= price;
        state.quantity -= 1;
        return;
      }

      const product = state.products[idx];

      state.quantity -= product.quantity;

      state.total -= product.price * product.quantity;

      product.quantity = newQnt;

      state.total += product.price * product.quantity;

      state.quantity += product.quantity;
    },
    clean(state) {
      Object.assign(state, initialState);
    },
  },
});

export const { addProduct, clean, updateProduct } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
