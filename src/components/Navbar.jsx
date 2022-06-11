import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<div className="flex items-center justify-between w-full p-3 absolute z-[100]">
				<Link to="/">
					<h1 className="text-green-600 text-4xl font-bold cursor-pointer">
						MOVIEAPP
					</h1>
				</Link>
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
			</div>
		</>
	);
};

export default Navbar;
