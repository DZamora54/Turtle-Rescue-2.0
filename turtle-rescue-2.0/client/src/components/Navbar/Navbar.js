import React from "react";
import "./Navbar.css";

const Navbar = () => 
	<nav id="navbar" className="nav-extended green">

		{/* LOGO */}
		<div className="nav-wrapper">
			<h3 id="logo">turtle<span>hero</span></h3>
		</div>

		<Tabs/>
		
	</nav>;


export default Navbar;