import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./Products/ProductsSlice";
import categoriesSlice from "./Categories/categoriesSlice";
import userSlice from "./User/userSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    categories: categoriesSlice,
    user: userSlice
  }
});