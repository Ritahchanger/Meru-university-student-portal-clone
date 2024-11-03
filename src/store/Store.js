import { configureStore } from "@reduxjs/toolkit";

import SideBarSlice from "./features/SidebarSlice";
import UnitsRegistrationSlice from "./features/UnitsRegistrationSlice";


import transitModalSlice from "./features/TransitModalSlice";

const store  = configureStore({


    reducer:{

        sidebar:SideBarSlice.reducer,

        registrationSlice:UnitsRegistrationSlice.reducer,

        transitModal:transitModalSlice.reducer

    }


})


export default store