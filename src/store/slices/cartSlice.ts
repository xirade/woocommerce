import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LineItem } from "../../interfaces/WooCommerceTypes";

interface CartState {
  lineItems: LineItem[];
}

const initialState: CartState = {
  lineItems: []
};

const addLineItemReducer = (
  state: CartState,
  action: PayloadAction<LineItem>
) => {
  const index = state.lineItems.findIndex(
    (lineItem) => lineItem.product_id === action.payload.product_id
  );
  if (index === -1) {
    state.lineItems = [...state.lineItems, action.payload];
  } else {
    state.lineItems[index].quantity += action.payload.quantity;
  }
};

const decrementQuantityReducer = (
  state: CartState,
  action: PayloadAction<LineItem>
) => {
  const index = state.lineItems.findIndex(
    (lineItem) => lineItem.product_id === action.payload.product_id
  );
  if (index >= 0 && state.lineItems[index].quantity > 1) {
    state.lineItems[index].quantity -= action.payload.quantity;
  }
};

const removeLineItemReducer = (
  state: CartState,
  action: PayloadAction<LineItem>
) => {
  const index = state.lineItems.findIndex(
    (lineItem) => lineItem.product_id === action.payload.product_id
  );
  if (index >= 0) {
    state.lineItems.splice(index, 1);
  }
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addLineItem: addLineItemReducer,
    decrementLineItemQuantity: decrementQuantityReducer,
    removeLineItem: removeLineItemReducer,
    resetCartState() {
      return initialState;
    }
  }
});

export const {
  addLineItem,
  decrementLineItemQuantity,
  removeLineItem,
  resetCartState
} = cartSlice.actions;

export default cartSlice.reducer;
