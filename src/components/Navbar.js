import React, { useContext } from "react";
import { Navbar as BaseNavbar } from "react-bootstrap";

import { PostContext } from "../context/PostContext";

function Navbar() {
  const postData = useContext(PostContext);

  return (
    <BaseNavbar>
      <BaseNavbar.Brand href="#home">Navbar with text</BaseNavbar.Brand>
      <BaseNavbar.Toggle />
      <BaseNavbar.Collapse className="justify-content-end">
        <BaseNavbar.Text>
          Number of messages: {Object.keys(postData).length}
        </BaseNavbar.Text>
      </BaseNavbar.Collapse>
    </BaseNavbar>
  );
}

export default Navbar;
