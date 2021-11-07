import React, { FC } from "react";

const Spinner: FC<{}> = () => {
	return (
		<div>
			<div className="spinner-wrapper">
				<div className="donut" />
			</div>
		</div>
	);
};

export default Spinner;
