import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { saveTodo, getTodo, updateTodo } from "../services/TodoService";

// eslint-disable-next-line react/prop-types
const AddNewTodoModal = ({ onNewTodoAdded, todoToUpdateId, listTodos }) => {
	const navigator = useNavigate();

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [completed, setCompleted] = useState(false);

	useEffect(() => {
		if (todoToUpdateId) {
			getTodo(todoToUpdateId).then((response) => {
				const { title, description, completed } = response.data;
				setTitle(title);
				setDescription(description);
				setCompleted(completed);
			});
		}
	}, [todoToUpdateId]);

	function saveOrUpdateTodo(e) {
		e.preventDefault();

		const todo = { title, description, completed };
		console.log(todo);

		if (todoToUpdateId) {
			updateTodo(todoToUpdateId, todo)
				.then((response) => {
					console.log(response);
					listTodos();
				})
				.catch((error) => {
					console.log(error);
				});
		} else {
			saveTodo(todo)
				.then((response) => {
					console.log(response);
					onNewTodoAdded(response.data);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}

	function goToTodos() {
		navigator("/");
	}

	return (
		<dialog id="my_modal_1" className="modal">
			<form method="dialog" className="modal-box">
				<h3 className="font-bold text-lg mb-4">
					{todoToUpdateId ? "Update" : "Add New"} Todo
				</h3>
				<div className="form-control w-full max-w-xs">
					<label className="label">
						<span className="label-text">Title:</span>
					</label>
					<input
						type="text"
						placeholder="Type here"
						name="title"
						value={title}
						onChange={(e) => {
							setTitle(e.target.value);
						}}
						className="input input-bordered w-full max-w-xs"
					/>
				</div>
				<div className="form-control w-full max-w-xs">
					<label className="label">
						<span className="label-text">Description:</span>
					</label>
					<input
						type="description"
						placeholder="Type here"
						name="description"
						value={description}
						onChange={(e) => {
							setDescription(e.target.value);
						}}
						className="input input-bordered w-full max-w-xs"
					/>
				</div>
				<div className="modal-action">
					{/* if there is a button in form, it will close the modal */}
					<button className="btn btn-error" onClick={goToTodos}>
						Close Modal
					</button>
					<button className="btn" onClick={(e) => saveOrUpdateTodo(e)}>
						Submit
					</button>
				</div>
			</form>
		</dialog>
	);
};

export default AddNewTodoModal;
