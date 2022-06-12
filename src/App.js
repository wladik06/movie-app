import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import Protected from "./components/Protected";

function App() {
	return (
		<>
			<AuthContextProvider>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route
						path="/account"
						element={
							<Protected>
								<Account />
							</Protected>
						}
					/>
				</Routes>
			</AuthContextProvider>
		</>
	);
}

export default App;
