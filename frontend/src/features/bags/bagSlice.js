import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./bagAction";

const initialState = {
  bagData: [],
  cartItems: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const bagSlice = createSlice({
  name: "bags",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const extractItemIndex = state.cartItems.findIndex(
        (curr) => curr._id === action.payload._id
      );

      if (extractItemIndex >= 0) {
        state.cartItems[extractItemIndex].cartQuantity += 1;
      } else {
        const product = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(product);
      }
    },

    removeCart: (state, action) => {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload
        ),
      };
    },

    increaseItem: (state, action) => {
      const checkIndex = state.cartItems.findIndex(
        (currentItem) => currentItem._id === action.payload._id
      );

      return {
        ...state,
        cartItems: state.cartItems.map((currentItem, index) =>
          index === checkIndex
            ? { ...currentItem, cartQuantity: currentItem.cartQuantity + 1 }
            : currentItem
        ),
      };
    },

    decreaseItem: (state, action) => {
      const checkIndex = state.cartItems.findIndex((currentItem) => {
        return currentItem._id === action.payload._id;
      });

      return {
        ...state,
        cartItems: state.cartItems.map((currentItem, index) =>
          index === checkIndex
            ? {
                ...currentItem,
                cartQuantity:
                  currentItem.cartQuantity > 1
                    ? currentItem.cartQuantity - 1
                    : 1,
              }
            : currentItem
        ),
      };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getData.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isSuccess = true),
          (state.bagData = action.payload);
      })

      .addCase(getData.rejected, (state) => {
        (state.isSuccess = false), (state.isError = true);
      });
  },
});

export const { addToCart, removeCart, increaseItem, decreaseItem } =
  bagSlice.actions;
export default bagSlice.reducer;


//*******All bag data******//
export const getData = createAsyncThunk("BAG/DATA", async () => {
  try {
    return await fetchData();
  } catch (error) {
    console.log(error);
  }
});
