import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Login, { validateInput } from "../pages/Login";
import { FirebaseContext } from "../firebase";
import { Router } from "react-router-dom";

describe("login", () => {
	test("validate function should pass on correct input", () => {
		const text = "text@text.dk";
		expect(validateInput(text)).toBe(true);
	});

	test("validate function should not pass on correct input", () => {
		const text = "text";
		expect(validateInput(text)).not.toBe(true);
	});
	

	test("login form should be in the document", () => {
		const utils = render(<Login />);
		const placeholder = utils.screen.getByText("Email");
		expect(placeholder).toBeInTheDocument();		
	});

	test("email field should have type", () => {
		const utils = render(<Login />);
		const emailInput = utils.screen.getByText("email");
		expect(emailInput).getAttribute("type").toBe("email");
	});

});

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
					<Login />
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
			fireEvent.click("login");

			expect(("Email").value).toBe("test@ucn.dk");
			expect(("Password").value).toBe("password123");
		});
	});
});
