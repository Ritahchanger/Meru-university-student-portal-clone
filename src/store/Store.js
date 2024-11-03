import { configureStore } from "@reduxjs/toolkit";

import SideBarSlice from "./features/SidebarSlice";
import UnitsRegistrationSlice from "./features/UnitsRegistrationSlice";


import transitModalSlice from "./features/TransitModalSlice";
import preloaderSlice from "./features/preloaderSlice";

const store  = configureStore({


    reducer:{

        sidebar:SideBarSlice.reducer,

        registrationSlice:UnitsRegistrationSlice.reducer,

        transitModal:transitModalSlice.reducer,

        preloader:preloaderSlice.reducer

    }


})


export default store