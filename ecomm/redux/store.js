import { configureStore } from "@reduxjs/toolkit";
import signUpReducer from "./slices/registerSlice";
import productReducer from "./slices/productSlice";
import loginReducer from "./slices/loginSlice";
import countReducer from "./slices/countSlice";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    signUpInfo: signUpReducer,
    productInfo: productReducer,
    loginInfo: loginReducer,
    count: countReducer,
    cart: cartReducer,
  },
});
export default store;
