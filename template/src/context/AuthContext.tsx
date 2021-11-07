import React, { createContext, FC, useContext, useState } from "react";

const AuthContext = createContext({});

const AuthContextWrapper: FC = ({ children }) => {
	const [details, setDetails] = useState({ email: "", password: "", id: "" });
	const editDetails = (data: any) => {
		setDetails(data);
	};

	const sharedState = {
		details,
		editDetails,
	};

	return <AuthContext.Provider value={sharedState}>{children}</AuthContext.Provider>;
};
export { AuthContextWrapper };

export function useAuthContext() {
	return useContext(AuthContext);
}
