import React, { FC, ReactElement } from "react";
import SEO from "../components/layout/SEO";

const Home: FC<ReactElement> = () => {
	return (
		<>
			<SEO title="Home" />
			<main>Home</main>
		</>
	);
};

export default Home;
