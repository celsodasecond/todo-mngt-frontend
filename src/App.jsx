import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import ListTodoComponent from "./components/ListTodoComponent";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<div className="flex flex-col h-screen justify-between">
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path="/" element={<ListTodoComponent />}></Route>
						<Route path="/todos" element={<ListTodoComponent />}></Route>
					</Routes>
					<Footer />
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
