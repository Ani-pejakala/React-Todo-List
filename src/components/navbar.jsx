import React, { Component } from "react";
//import "bootstrap/dist/css/bootstrap.css";
function NavBar({totalCounters}) {
  return (
    <React.Fragment>
  <h1 id="head1"> <a  href="#">
      <img src="https://img.icons8.com/ios/50/000000/checklist-filled.png" width="30" height="30" className="icon d-inline-block align-top" alt=""/>
    </a><span id="t1">Todo List</span></h1>
    </React.Fragment>
  );
}

export default NavBar;
