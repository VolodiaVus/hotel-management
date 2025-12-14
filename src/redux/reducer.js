import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QTY,
  DECREASE_QTY,
} from "./actions";

const initialState = {
  cart: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_TO_CART: {
      const item = action.payload;

      const existing = state.cart.find((i) => i.id === item.id);

      // already in cart → increase quantity
      if (existing) {
        return {
          ...state,
          cart: state.cart.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }

      // add new item
      return {
        ...state,
        cart: [...state.cart, { ...item, quantity: 1 }],
      };
    }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((i) => i.id !== action.payload),
      };

    case INCREASE_QTY:
      return {
        ...state,
        cart: state.cart.map((i) =>
          i.id === action.payload ? { ...i, quantity: i.quantity + 1 } : i
        ),
      };

    case DECREASE_QTY:
      return {
        ...state,
        cart: state.cart
          .map((i) =>
            i.id === action.payload
              ? { ...i, quantity: Math.max(1, i.quantity - 1) }
              : i
          )
          .filter((i) => i.quantity > 0),
      };

    default:
      return state;
  }
};