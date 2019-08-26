import React from "react";
import MenuBar from "./MenuBar";
import Footer from "./Footer";
import "../../styles/app.scss";

export default function Layout(props) {
  return (
    <div>
      <MenuBar />
      {props.children}
      <Footer></Footer>
    </div>
  );
}
