"use client";

import { Provider } from "react-redux";
import { store } from "./index";

type StoreProviderProps = {
    children: React.ReactNode;
};

export const StoreProvider = ({ children }: StoreProviderProps) => {
    return <Provider store={store}>{children}</Provider>;
};
