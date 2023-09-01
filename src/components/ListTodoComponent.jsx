import React, { useEffect, useState } from "react";
import { getAllTodos } from "../services/TodoService";

const ListTodoComponent = () => {
	const [todos, setTodos] = useState([]);

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

	return (
		<div className="flex justify-center mt-2 mb-auto">
			<div className="overflow-x-auto w-4/5">
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
										<button className="btn btn-ghost btn-xs">Edit</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ListTodoComponent;
