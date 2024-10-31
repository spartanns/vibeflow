"use client";
import { store } from "@/redux/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

const RootLayout = ({ children }: { children: ReactNode }) => (
  <Provider store={store}>
    <main>
      {children}
    </main>
  </Provider>
);

export default RootLayout;
