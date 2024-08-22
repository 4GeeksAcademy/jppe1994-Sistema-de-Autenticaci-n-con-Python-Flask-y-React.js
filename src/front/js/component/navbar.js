import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom"

export const Navbar = () => {
	const {store, actions} = useContext(Context)
	const navigate = useNavigate()

	function handleLogout(){
		actions.logout()
		navigate('/')
	}
	return (
		<nav className="navbar navbar-light bg-light">
  			<div className="container">
    			<div className="mr-auto">
      
   				 </div>
   					 {store.auth === true && (
      				<div className="ml-auto">
					<button onClick={() => handleLogout()} className="btn btn-primary">
					Logout
					</button>
      		</div>
    		)}
 				 </div>
		</nav>

	);
};