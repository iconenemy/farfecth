import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICardProduct, ICardState } from "./cardType";

const initialState: ICardState = {
  products: [],
  total_price: 0,
  products_amount: 0,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addToCard: (state, action: PayloadAction<ICardProduct>) => {
      const productCandidate = state.products.find(
        ({ id }) => action.payload.id === id
      );
      if (productCandidate) {
        console.log("here1");

        productCandidate.qty++;
        productCandidate.price += action.payload.price;
      } else {
        console.log("here2");

        state.products.push(action.payload);
      }
      state.total_price += action.payload.price;
      state.products_amount += 1;
    },
    removeProduct: (state, { payload }: PayloadAction<string>) => {
      const findProduct = state.products.find(({ id }) => id === payload);
      if (findProduct) {
        state.products = state.products.filter(({ id }) => id !== payload);
        state.products_amount -= findProduct.qty;
        state.total_price -= findProduct.price;
      }
    },
    cardUpdate: (state, { payload }: PayloadAction<ICardProduct>) => {
      const findProduct = state.products.find(({ id }) => id === payload.id);
      if (findProduct) {
        state.total_price += payload.price * payload.qty - findProduct.price;
        state.products_amount += payload.qty - findProduct.qty;
        state.products = state.products.map((item) =>
          item.id === payload.id
            ? {
                ...item,
                qty: payload.qty,
                size: payload.size,
                price: payload.price * payload.qty,
              }
            : item
        );
      }
    },
    clearCard: () => initialState,
  },
});

export const { addToCard, clearCard, removeProduct, cardUpdate } =
  cardSlice.actions;

export default cardSlice.reducer;
