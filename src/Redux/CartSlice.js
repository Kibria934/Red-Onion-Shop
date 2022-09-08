import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  product: localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [],
  item: 0,
};
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add_to_cart: (state, action) => {
      const existIndex = state.product.findIndex(
        (data) => data.name == action.payload.name
      );
      if (existIndex >= 0) {
        state.product[existIndex].qnty += action.payload.qnty;
        toast.success(`Successfully added ${action.payload.qnty} more product`);
        localStorage.setItem("cartItem", JSON.stringify(state.product));
        return;
      } else {
        const data = {
          name: action.payload.name,
          qnty: action.payload.qnty,
          price: +action.payload.price * action.payload.qnty,
          type: action.payload.type,
        };
        state.product.push(data);
        state.item++;
        toast.success(`Successfully order ${action.payload.name}`);
        localStorage.setItem("cartItem", JSON.stringify(state.product));
      }
    },
  },
});

export const { add_to_cart } = CartSlice.actions;
export default CartSlice.reducer;
