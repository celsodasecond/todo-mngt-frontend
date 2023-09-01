import React from "react";
import { useState, useEffect } from "react";
import { saveTodo } from "../services/TodoService";

// eslint-disable-next-line react/prop-types
const AddNewTodoModal = ({ onNewTodoAdded }) => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [completed, setCompleted] = useState(false);

	function saveOrUpdateTodo(e) {
		e.preventDefault();

		const todo = { title, description, completed };
		console.log(todo);

		saveTodo(todo)
			.then((response) => {
				console.log(response);
				onNewTodoAdded(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<dialog id="my_modal_1" className="modal">
			<form method="dialog" className="modal-box">
				<h3 className="font-bold text-lg mb-4">Add New Todo</h3>
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
					<button className="btn btn-warning">Close Modal</button>
					<button className="btn" onClick={(e) => saveOrUpdateTodo(e)}>
						Submit
					</button>
				</div>
			</form>
		</dialog>
	);
};

export default AddNewTodoModal;
