import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,

  isTransitModalShown:true,
};

const transitModalSlice = createSlice({
  name:"transitModal",

  initialState,

  reducers: {

    openTransitModal: (state, action) => {
      state.isTransitModalShown = true;

      state.data = action.payload;
    },


    closeTransitModal: (state) => {
      state.isTransitModalShown = false;

      state.data = null;
    },

    toggleTransitModal: (state) => {

        state.isTransitModalShown = !state.isTransitModalShown

    },
  },
});

export const {openTransitModal,closeTransitModal }  = transitModalSlice.actions;



export default transitModalSlice

