import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    isSidebarShown: window.innerWidth > 820,

};

const SideBarSlice = createSlice({

    name: 'sidebar',

    initialState,

    reducers: {

        showSidebar: (state) => {
            state.isSidebarShown = true;
        },

        hideSidebar: (state) => {
            state.isSidebarShown = false;
        },

        toggleSidebar: (state) => {
            state.isSidebarShown = !state.isSidebarShown;
        },

    },


});




export const { showSidebar, hideSidebar, toggleSidebar } = SideBarSlice.actions;



export default SideBarSlice;
