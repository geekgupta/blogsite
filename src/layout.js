import React from "react";
import Navbar from "./navbar";
function Layout(props) {
  return (
    <div style={{ backgroundcolor: "#e3f2fd" }}>
      <Navbar />
      {props.children}
    </div>
  );
}

export default Layout;
