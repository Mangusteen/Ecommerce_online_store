import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, PRODUCTS } from "../../utils/common";

export const getProducts = createAsyncThunk('products/getProducts', async (_, thunkAPI) => {
  try {
    const res = await axios(`${BASE_URL}/products`);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
});

export const getSpecificProducts = createAsyncThunk('products/getSpecificProducts', async (category, thunkAPI) => {
  try {
    const res = await axios(`${PRODUCTS}/category/${category}`);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
});

export const getProduct = createAsyncThunk('products/getProduct', async (id, thunkAPI) => {
  try {
    const res = await axios(`${PRODUCTS}/${id}`);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
})

export const getWithLimit = createAsyncThunk('products/getWithLimit', async (_, thunkAPI) => {
  try {
    const res = await axios(`${PRODUCTS}?limit=4`);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
})

const productsSlice = createSlice({
  name: 'Products',
  initialState: {
    list: [],
    specificProducts: [],
    isLoading: false,
    product: [],
    withLimits: [],
    related: []
  },
  reducers: {
    getProductsByCategory: (state, { payload }) => {
      state.specificProducts = state.list.filter(({ category }) => category === payload);
    },
    getRelatedProducts: (state, { payload }) => {
      state.related = state.list.filter(({ category }) => category === payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.list = payload;
      }),
      builder.addCase(getProducts.rejected, (state) => {
        state.isLoading = false;
      }),
      builder.addCase(getSpecificProducts.pending, (state) => {
        state.isLoading = true;
      }),
      builder.addCase(getSpecificProducts.fulfilled, (state) => {
        state.isLoading = false;
      }),
      builder.addCase(getSpecificProducts.rejected, (state) => {
        state.isLoading = false;
      }),
      builder.addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      }),
      builder.addCase(getProduct.fulfilled, (state, { payload }) => {
        state.product = state.list.find(({ id }) => id === payload.id);
        state.isLoading = false;
      }),
      builder.addCase(getProduct.rejected, (state) => {
        state.isLoading = false;
      })
    builder.addCase(getWithLimit.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getWithLimit.fulfilled, (state, { payload }) => {
        state.withLimits = payload;
        state.isLoading = false;
      }),
      builder.addCase(getWithLimit.rejected, (state) => {
        state.isLoading = false;
      })
  }
});

export const { getProductsByCategory, getSingleProduct, getRelatedProducts } = productsSlice.actions;

export default productsSlice.reducer;