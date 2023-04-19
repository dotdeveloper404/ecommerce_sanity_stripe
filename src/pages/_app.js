import React from "react";
import "@/styles/globals.css";

import { Layout } from "@/components";
import { Toaster } from "react-hot-toast";
import { StateContext } from "@/context/StateContext";

export default function App({ Component, pageProps }) {
  return (
    //Layout is parent component and it will be called in the entire application all the component will have layout
    <StateContext>
      <Layout>
        <Toaster/>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}
