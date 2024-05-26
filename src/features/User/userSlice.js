import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from '../../utils/common';

export const getAuth = createAsyncThunk('user/getAuth', async (payload, thunkAPI) => {
  try {
    const res = await axios.post('https://fakestoreapi.com/auth/login', payload);
    // console.log(res.data);
    if (res.data) alert('Welcome back!');
  } catch (error) {
    alert('Sorry, you are not loged in! Please, try again');
    return thunkAPI.rejectWithValue(error.message);
  }
})


const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    isLoading: false,
    currentUser: null,
    showForm: false,
    cart: []
  },
  reducers: {
    showUpForm: (state, { payload }) => {
      state.showForm = payload;
    },
    addItemToCart: (state, { payload }) => {
      let newCart = [...state.cart];
      const found = state.cart.find(({ id }) => id === payload.id)

      if (found) {
        newCart = newCart.map((item) => {
          return item.id === payload.id ? { ...item, quantity: payload.quantity || item.quantity + 1 } : item;
        })
      } else {
        newCart.push({ ...payload, quantity: 1 })
      }

      state.cart = newCart;
    },
    deleteItemFromCart: (state, { payload }) => {
      state.cart = state.cart.filter(({ id }) => id !== payload)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAuth.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getAuth.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.currentUser = payload;
      }),
      builder.addCase(getAuth.rejected, (state) => {
        state.isLoading = false;
        state.login = false;
      })
  }
})

export const { showUpForm, addItemToCart, deleteItemFromCart } = userSlice.actions;
export default userSlice.reducer;