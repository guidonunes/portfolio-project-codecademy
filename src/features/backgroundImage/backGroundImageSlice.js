import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import unsplashApi from "../../api/unsplash";


export const getBackgroundImage = createAsyncThunk(
  "backgroundImage/getImage",
  unsplashApi.getImage
);


export const backgroundImageSlice = createSlice({
  name: "backgroundImage",
  initialState: {
    imageUrls: [],
    currentImageUrlIndex:0,
  },
  reducers: {
    switchToNextBackgroundImage: (state) => {
      state.currentImageUrlIndex =
        (state.currentImageUrlIndex + 1) % state.imageUrls.length;
    },
    switchToPreviousBackgroundImage: (state) => {
      state.currentImageUrlIndex =
        (state.currentImageUrlIndex - 1 + state.imageUrls.length) %
        state.imageUrls.length;
    },
  }

});
