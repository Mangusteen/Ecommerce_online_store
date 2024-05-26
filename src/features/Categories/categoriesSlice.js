import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../../utils/common";
import axios from "axios";

export const getCategories = createAsyncThunk('categories/getCategories', async (_, thunkAPI) => {
  try {
    const res = await axios(`${PRODUCTS}/categories`);

    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
// export const getCategories = createAsyncThunk('categories/getCategories', async (_, thunkAPI) => {
//   try {
//     const res = await axios(`${PRODUCTS}/categories`);

//     return res.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error);
//   }
// });

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    isLoading: false,
    error: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      }),
      builder.addCase(getCategories.rejected, (state) => {
        state.isLoading = false;
        state.error = error;
      })
  }
});

export default categoriesSlice.reducer;