import React from "react";
import "./Navbar.css";

const Navbar = () => 
	<nav id="navbar" className="nav-extended green">

		{/* LOGO */}
		<div className="nav-wrapper">
			<h3 id="logo"><i id="logo-icon" className="large material-icons">location_on</i>turtle<span>hero</span></h3>
		</div>

		{/* TABS */}
		<div id="tabs" className="nav-content">
			<ul className="tabs tabs-transparent">
				<li className="tab"><a className="active" href="#tab1">Reports</a></li>
				<li className="tab"><a href="#tab2">Responding</a></li>
				<li className="tab"><a href="#tab3">Rescued <span id="counter" className="new badge yellow darken-1 green-text" data-badge-caption="">0</span></a></li>
			</ul>
		</div>
		
	</nav>;


export default Navbar;