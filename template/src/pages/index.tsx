import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Home = () => import("./home");

export default function AppRoutes() {
	return (
		// <Suspense
		// 	fallback={
		// 		<div className="spinner-wrapper">
		// 			<div className="donut" />
		// 		</div>
		// 	}
		// >
		<Routes>
			<Route path="/" children={Home} />

			{/* <Navigate to="/" /> */}
		</Routes>
		// </Suspense>
	);
}
