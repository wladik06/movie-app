import React from 'react';
import { Link } from "react-router-dom";

const Login = () => {

	// styling login form
	return (
		<>
			<div className="w-full h-screen">
				<img
					className="hidden sm:block absolute w-full h-full object-cover"
					src="https://images.unsplash.com/photo-1631148611744-06fdccf663af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
					alt="/"
				/>
				<div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
				<div className="fixed w-full px-4 py-24 z-50">
					<div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
						<div className="max-w-[320px] mx-auto py-16">
							<h1 className="text-3xl font-bold">Log In</h1>
							<form className="w-full flex flex-col py-4">
								<input
									className="p-3 my-2 bg-gray-700 rouded"
									type="email"
									placeholder="Email"
									autoComplete="email"
								/>
								<input
									className="p-3 my-2 bg-gray-700 rouded"
									type="password"
									placeholder="Password"
									autoComplete="current-password"
								/>
								<button className="bg-green-600 py-3 my-6 rounded font-bold">
									Sign In
								</button>
								<div className="flex justify-between items-center text-sm text-gray-600"></div>
								<p className="py-8">
									<span className="text-gray-600 p-3">New to LeafWatch?</span>
									<Link to="/register">Register</Link>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;