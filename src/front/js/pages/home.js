import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Form from "../component/form";
import { Navigate } from "react-router-dom"

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log("Se cargó home")

	return (
		<div className="text-center mt-5">
			<h1>Home!!</h1>
			{ store.auth == true ? <Navigate to="/demo"/>: <Form />}
			
		
		</div>
	);
};
