import React from "react";
import { render, fireEvent} from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { FirebaseContext } from "../firebase";
import { Login } from "../pages/Login";

jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
}));

const firebase = {
	auth: jest.fn(() => ({
		signInWithEmailAndPassword: jest.fn(() =>
			Promise.resolve("I am logged in!")
		),
	})),
};

describe("<Login />", () => {
	it("renders the login page with a form submission", async () => {
		render(
			<Router>
				<FirebaseContext.Provider value={{ firebase }}>
					Login
				</FirebaseContext.Provider>
			</Router>
		);

		await (async () => {
			await fireEvent.change(("Email"), {
				target: { value: "test@ucn.dk" },
			});
			await fireEvent.change(("Password"), {
				target: { value: "password123" },
			});
			fireEvent.click(("sign-in"));

			expect(("Email").value).toBe(
				"test@ucn.dk"
			);
			expect(("Password").value).toBe("password123");
		});
	});
});
