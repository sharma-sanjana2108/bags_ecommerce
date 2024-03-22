import { configureStore } from "@reduxjs/toolkit";
import bagReducer from "./bags/bagSlice";

const loadInitialState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState) || [];
  } catch (err) {
    console.error("Error loading initial state from local storage:", err);
    return [];
  }
};

const preloadedState = {
  bags: {
    cartItems: loadInitialState(),
    bagData: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
  },
};

const store = configureStore({
  reducer: { bags: bagReducer },
  preloadedState: preloadedState,
});

const saveDataIntoLocalstorage = (cartItems) => {
  try {
    const serilaizedData = JSON.stringify(cartItems);
    localStorage.setItem("cart", serilaizedData);
  } catch (err) {
    window.alert("some problem occur in it");
  }
};

store.subscribe(() => {
  const { cartItems } = store.getState().bags;
  if (Array.isArray(cartItems) && cartItems.length > 0) {
    saveDataIntoLocalstorage(cartItems);
  } else {
    localStorage.removeItem("cart"); // benefit of this line when user remove cart items localstorage also will be clear
  }
});

export default store;
