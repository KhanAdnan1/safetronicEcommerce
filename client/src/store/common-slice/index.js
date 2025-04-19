import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import API from "@/api";

const initialState = {
  isLoading: false,
  featureImageList: [],
};

export const getFeatureImages = createAsyncThunk(
  "/order/getFeatureImages",
  async () => {
    const response = await axios.get(
      `${API}/common/feature/get`
      //`https://safetronicecommerceserver.onrender.com/api/common/feature/get`
    );

    return response.data;
  }
);

export const addFeatureImage = createAsyncThunk(
  "/order/addFeatureImage",
  async (image) => {
    const response = await axios.post(
      `${API}/common/feature/add`,
      { image }
      //`https://safetronicecommerceserver.onrender.com/api/common/feature/add`,
    );

    return response.data;
  }
);


// export const deleteFeatureImage = createAsyncThunk(
//   "/products/deleteProduct",
//   async (id) => {
//     const result = await axios.delete(
//       `${API}/common/feature/delete${id}`,
//       //`https://safetronicecommerceserver.onrender.com/api/admin/products/delete/${id}`
//     );

//     return result?.data;
//   }
// );

export const deleteFeatureImage = createAsyncThunk(
  "/products/deleteFeatureImage", // Adjust the action type
  async (id) => {
    const result = await axios.delete(
      `${API}/common/feature/delete/${id}`, // Added a slash between `delete` and `id`
    );

    return result?.data;
  }
);

const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFeatureImages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFeatureImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.featureImageList = action.payload.data;
      })
      .addCase(getFeatureImages.rejected, (state) => {
        state.isLoading = false;
        state.featureImageList = [];
      });
  },
});

export default commonSlice.reducer;
