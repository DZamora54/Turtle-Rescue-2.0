import React from "react";
import "./Navbar.css";

const Navbar = () => (
	<nav id="navbar" className="nav-extended green">

		{/* LOGO */}
		<div className="nav-wrapper">
			<a href="index.html" className="brand-logo"><img id="logo" src="assets/images/turtlehero-logo.png" alt="turtlehero Logo"></a>
		</div>

		{/* LOGOUT */}
		<ul id="nav-top" className="right hide-on-med-and-down">
			<li><a href="#"><i class="material-icons">exit_to_app</i></a></li>
		</ul>

		{/* TABS */}
		<div className="nav-content">
			<ul id="tabs" className="tabs tabs-transparent">
				<li className="tab"><a className="active" href="#tab1">Reports</a></li>
				<li className="tab"><a href="#tab2">Responding</a></li>
				<li className="tab"><a href="#tab3">Rescued <span id="counter" className="new badge yellow darken-1 green-text" data-badge-caption="">0</span></a></li>
			</ul>
		</div>
		
	</nav>
);

export default Navbar;