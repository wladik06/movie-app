import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
	const { user, logOut } = UserAuth();
	const navigate = useNavigate();

	// handle logout functionality
	const logout = async () => {
		try {
			await logOut();
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className="flex items-center justify-between w-full p-3 absolute z-[100]">
				<Link to="/">
					<h1 className="text-green-600 text-4xl font-bold cursor-pointer">
						MOVIEAPP
					</h1>
				</Link>
				{user?.email ? (
					<div>
						<Link to="/account">
							<button className="text-white pr-4">Account</button>
						</Link>
						<button
							onClick={logout}
							className="bg-green-600 px-6 py-2 rounded cursor-pointer text-white"
						>
							Logout
						</button>
					</div>
				) : (
					<div>
						<Link to="/login">
							<button className="text-white pr-4">Log In</button>
						</Link>
						<Link to="/register">
							<button className="bg-green-600 px-6 py-2 rounded cursor-pointer text-white">
								Register
							</button>
						</Link>
					</div>
				)}
			</div>
		</>
	);
};

export default Navbar;
