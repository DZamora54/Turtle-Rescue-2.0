import React from "react";
import "./Tabs.css";

const Tabs = () => 
  <div id="tabs" className="nav-content">
    <ul className="tabs tabs-transparent">
      <li className="tab"><a className="active" href="#tab1">Reports</a></li>
      <li className="tab"><a href="#tab2">Responding</a></li>
      <li className="tab"><a href="#tab3">Rescued <span id="counter" className="new badge yellow darken-1 green-text" data-badge-caption="">0</span></a></li>
    </ul>
  </div>

export default Tabs;