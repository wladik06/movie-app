import React from 'react'
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Protected = ({ children }) => {
	const { user } = UserAuth();

    // if there is no user logged in redirect to home page
	if (!user) {
		return <Navigate to="/" />;
	} else {
		return children;
	}
};

export default Protected;