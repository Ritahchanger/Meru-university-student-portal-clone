import { configureStore } from "@reduxjs/toolkit";

import SideBarSlice from "./features/SidebarSlice";

const store  = configureStore({


    reducer:{

        sidebar:SideBarSlice.reducer

    }


})


export default store