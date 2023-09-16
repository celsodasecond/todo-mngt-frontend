import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import ListTodoComponent from "./components/ListTodoComponent";
import Footer from "./components/Footer";
import RegisterComponent from "./components/RegisterComponent";
import LoginComponent from "./components/LoginComponent";

function App() {
	return (
		<>
			<div className="flex flex-col h-screen justify-between">
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path="/" element={<ListTodoComponent />}></Route>
						<Route path="/todos" element={<ListTodoComponent />}></Route>

						<Route path="/register" element={<RegisterComponent />}></Route>
						<Route path="/login" element={<LoginComponent />}></Route>
					</Routes>
					<Footer />
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
