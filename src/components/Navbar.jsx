import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="flex w-full p-3 absolute z-[100]">
			<Link to="/">
				<h1 className="text-green-600 text-4xl font-bold cursor-pointer">
					MOVIEaplication
				</h1>
			</Link>
			<div className="items-center justify-end z-[100] flex w-full absolute">
				<div className="pr-3">
					<button className="text-white pr-4">Account</button>

					<button className="bg-green-600 px-6 py-2 rounded cursor-pointer text-white">
						Logout
					</button>
				</div>

				<div>
					<button className="text-white pr-4">Sign In</button>

					<button className="bg-green-600 px-6 py-2 rounded cursor-pointer text-white">
						Sign Up
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
