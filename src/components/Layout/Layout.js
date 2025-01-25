import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import Cards from "../../components/Layout/Cards";


function Layout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;