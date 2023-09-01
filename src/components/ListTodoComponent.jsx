import React, { useEffect, useState } from "react";
import { getAllTodos } from "../services/TodoService";
import AddNewTodoModal from "./AddNewTodoModal";

const ListTodoComponent = () => {
	const [todos, setTodos] = useState([]);
	const [selectedTodoId, setSelectedTodoId] = useState(null);

	useEffect(() => {
		listTodos();
	}, []);

	function listTodos() {
		getAllTodos()
			.then((response) => {
				console.log("GET TODOs RESPONSE: ", response.data);
				setTodos(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	function addToDo() {
		setSelectedTodoId(null);
		window.my_modal_1.showModal();
	}

	function updateTodo(id) {
		console.log(id);
		setSelectedTodoId(id);
		if (id) {
			const currentUrl = window.location.href;

			const baseUrl = currentUrl.split("/").slice(0, -1).join("/");

			const url = `${baseUrl}/${id}`;

			window.history.pushState({ path: url }, "", url);

			window.my_modal_1.showModal();

			console.log(url);
		}
	}

	function handleNewTodoAdded(newTodo) {
		setTodos([...todos, newTodo]);
	}

	return (
		<div className="flex justify-center -mt-4 mb-auto max-h-screen">
			<div className="overflow-x-auto w-4/5 mt-4">
				<button className="btn btn-sm btn-primary" onClick={addToDo}>
					Add
				</button>
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th>Completed</th>
							<th>Id</th>
							<th>Title</th>
							<th>Description</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{todos.map((todo) => {
							return (
								<tr
									key={todo.id}
									className={todo.completed ? "line-through" : ""}>
									<td>
										<label>
											<input
												type="checkbox"
												className="checkbox"
												checked={todo.completed ? "checked" : ""}
											/>
										</label>
									</td>
									<td>
										<div className="flex items-center space-x-3">
											<div>
												<div className="font-bold">{todo.id}</div>
											</div>
										</div>
									</td>
									<td>{todo.title}</td>
									<td>{todo.description}</td>
									<td>
										<button
											className="btn btn-ghost btn-xs"
											onClick={() => updateTodo(todo.id)}>
											Edit
										</button>
										<button className="btn btn-outline btn-error btn-xs ml-2">
											Delete
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			<AddNewTodoModal
				onNewTodoAdded={handleNewTodoAdded}
				todoToUpdateId={selectedTodoId}
				listTodos={listTodos}
			/>
		</div>
	);
};

export default ListTodoComponent;
