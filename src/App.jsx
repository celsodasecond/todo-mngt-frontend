import "./App.css";
import Header from "./components/Header";
import ListTodoComponent from "./components/ListTodoComponent";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<div className="flex flex-col h-screen justify-between">
				<Header />
				<ListTodoComponent />
				<Footer />
			</div>
		</>
	);
}

export default App;
