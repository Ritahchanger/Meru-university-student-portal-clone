import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRegistrationModalShown:false,
  data: null,
};

const UnitsRegistrationSlice = createSlice({
  name: "registrationSlice",

  initialState,

  reducers: {
    showUnitsRegistrationModal: (state, action) => {
      state.isRegistrationModalShown = true;
      state.data = action.payload;
    },

    hideUnitsRegistrationSlice: (state) => {
      state.isRegistrationModalShown = false;
      state.data = null;
    },

    toggleUnitsRegistrationModal: (state) => {
      state.isRegistrationModalShown = !state.isRegistrationModalShown;
    },
  },
});

export const {
  showUnitsRegistrationModal,
  hideUnitsRegistrationSlice,
  toggleUnitsRegistrationModal,
} = UnitsRegistrationSlice.actions;

export default UnitsRegistrationSlice;
