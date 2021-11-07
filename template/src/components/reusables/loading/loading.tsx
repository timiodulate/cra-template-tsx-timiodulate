import React, { FC } from "react";

const LoadingComponent: FC<{ loading: any }> = ({ children, loading }) => {
	return (
		<div>
			{loading && <p>Loading...</p>}
			{children || <div />}
		</div>
	);
};

// LoadingComponent.defaultProps = {
// 	fullScreen: true,
// 	zIndex: 10,
// };

export default LoadingComponent;
