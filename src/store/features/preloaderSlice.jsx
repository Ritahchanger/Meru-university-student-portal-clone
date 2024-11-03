import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPreloaderSliceShown:false,
};

const preloaderSlice = createSlice({
  name: "preloader",

  initialState,

  reducers: {
    openPreloaderSlice: (state) => {
      state.isPreloaderSliceShown = true;
    },

    closePreloaderSlice: (state) => {
      state.isPreloaderSliceShown = false;
    },

    togglePreloaderSlice: (state) => {
      state.isPreloaderSliceShown = !state.isPreloaderSliceShown;
    },
  },
});

export const { openPreloaderSlice, closePreloaderSlice } =
  preloaderSlice.actions;

export default preloaderSlice;
