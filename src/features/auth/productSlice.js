import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/data";

const productSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: products,
    filtered: products,
    filters: {
      brand: "All",
      category: "All",
      price: "All Prices",
    },
  },
  reducers: {
    setBrand: (state, action) => {
      state.filters.brand = action.payload;
    },
    setCategory: (state, action) => {
      state.filters.category = action.payload;
    },
    setPrice: (state, action) => {
      state.filters.price = action.payload;
    },
    applyFilters: (state) => {
      let temp = [...state.allProducts];

      if (state.filters.brand !== "All") {
        temp = temp.filter(p => p.brand === state.filters.brand);
      }

      if (state.filters.category !== "All") {
        temp = temp.filter(p => p.category === state.filters.category);
      }

      state.filtered = temp;
    },
  },
});

export const { setBrand, setCategory, setPrice, applyFilters } =
  productSlice.actions;

export default productSlice.reducer;
