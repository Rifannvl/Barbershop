import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BaseLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
