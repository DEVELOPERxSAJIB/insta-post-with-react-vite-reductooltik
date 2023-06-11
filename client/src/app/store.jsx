import { configureStore } from "@reduxjs/toolkit" 
import UserSlice from "../features/Users/UserSlice";

const store = configureStore({
    reducer: {
        user: UserSlice
    },
    devTools: true
});

// export default
export default store;