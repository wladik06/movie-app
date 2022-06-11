import { createContext, useContext, useState } from "react";
import auth from "../firebase.config";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
	const [user] = useState({});

    //register, login, logout
	function register(email, password) {
		return createUserWithEmailAndPassword(auth, email, password);
	}

	function logIn(email, password) {
		return signInWithEmailAndPassword(auth, email, password);
	}

	function logOut() {
		return signOut(auth);
	}

    // check whether the user is logged in 
	// useEffect(() => {
	// 	const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
	// 		setUser(currentUser);
	// 	});
	// 	return () => {
	// 		unsubscribe();
	// 	};
	// });

	return (
		<AuthContext.Provider value={{ register, logIn, logOut, user }}>
			{children}
		</AuthContext.Provider>
	);
}

export function UserAuth() {
	return useContext(AuthContext);
}
