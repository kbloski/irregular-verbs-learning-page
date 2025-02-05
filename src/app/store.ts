import { configureStore } from "@reduxjs/toolkit";
import verbsSlice from "../features/verbs/verbsSlice";
import { verbsApi } from "../features/api/apiVerbs";

// Utworzenie store
const store = configureStore({
    reducer: {
        verbs: verbsSlice.reducer,
        [verbsApi.reducerPath]: verbsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(verbsApi.middleware),
});

export { store };
