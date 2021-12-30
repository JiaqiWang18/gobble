import { createSlice } from "@reduxjs/toolkit";

interface CarouselSliceState {
  currentImageIndex: number;
  numImages: number;
}

const initialState: CarouselSliceState = {
  currentImageIndex: -1, // -1 represent initially don't show any
  numImages: 8,
};

export const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    increment: (state) => {
      state.currentImageIndex++;
      if (state.currentImageIndex >= state.numImages) {
        state.currentImageIndex = 0;
      }
    },
  },
});

export const { increment } = carouselSlice.actions;

export default carouselSlice.reducer;
