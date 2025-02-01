

import { configureStore } from "@reduxjs/toolkit";
import learnSlice from "./learn/learnSlice";

// Utworzenie store
const store = configureStore({
    reducer: {
        learn: learnSlice.reducer
        // example: exampleReducer, // Dodajemy nasz reducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleware)
});

export { store };
