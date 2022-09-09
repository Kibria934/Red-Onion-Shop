import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  product: localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [],
  item: 0,
  subTotal: localStorage.getItem("subTotal")
    ? JSON.parse(localStorage.getItem("subTotal"))
    : 0,
  // total: localStorage.getItem("total")
  // ? JSON.parse(localStorage.getItem("total"))
  // : 0,
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
        state.product[existIndex].qnty += +action.payload.qnty;
        state.product[existIndex].price = (
          +action.payload.price * +state.product[existIndex].qnty
        ).toFixed(2);
        state.subTotal = +state.subTotal + +action.payload.qnty;
        // state.total += +(+action.payload.price * +action.payload.qnty).toFixed(
        // 2
        // );
        toast.success(`Successfully added ${action.payload.qnty} more product`);
        localStorage.setItem("subTotal", JSON.stringify(state.subTotal));
        // localStorage.setItem("total", JSON.stringify(state.total));
        localStorage.setItem("cartItem", JSON.stringify(state.product));
        return;
      } else {
        const data = {
          name: action.payload.name,
          qnty: action.payload.qnty,
          price: +(+action.payload.price * action.payload.qnty).toFixed(2),
          type: action.payload.type,
          img: action.payload.img,
        };
        state.product.push(data);
        state.subTotal = +state.subTotal + +action.payload.qnty;
        // state.total += +(+action.payload.price * +action.payload.qnty).toFixed(
        // 2
        // );
        state.item++;
        toast.success(`Successfully order ${action.payload.name}`);
        localStorage.setItem("subTotal", JSON.stringify(state.subTotal));
        // console.log(+state.total);
        // localStorage.setItem("total", JSON.stringify(+state.total.toFixed(2)));
        localStorage.setItem("cartItem", JSON.stringify(state.product));
        console.log(state.total);
      }
    },
  },
});

export const { add_to_cart } = CartSlice.actions;
export default CartSlice.reducer;
