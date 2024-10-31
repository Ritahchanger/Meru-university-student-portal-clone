import { configureStore } from "@reduxjs/toolkit";

import SideBarSlice from "./features/SidebarSlice";
import UnitsRegistrationSlice from "./features/UnitsRegistrationSlice";


const store  = configureStore({


    reducer:{

        sidebar:SideBarSlice.reducer,

        registrationSlice:UnitsRegistrationSlice.reducer

    }


})


export default store