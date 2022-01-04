import { useState } from "react";

function MenuBar({activeNav, toggleNav}) {
  return (
    <div className={`menu-bar ${activeNav ? "menu-bar-active" : ""}`} onClick={toggleNav}>
      <i></i>
      <i></i>
      <i></i>
    </div>
  )
}

export default MenuBar;