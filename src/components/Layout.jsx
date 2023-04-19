import React from "react";
import Head from "next/head";
import { NavBar, Footer } from "@/components";
//children are all the components which will be passed in layout. and lay out is called in _app.js
const Layout = ({ children }) => {
  return (
    <>
    <div className="layout">
      <Head>
        <title>JS Headphone Store</title>
      </Head>
      <header>
        <NavBar />
      </header>

      <main className="main-container">{children}</main>

      <Footer />
    </div>
    </>
  );
};

export default Layout;
