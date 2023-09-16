import React, { useState } from "react";
import { registerAPICall } from "../services/AuthService";
import { useNavigate } from "react-router-dom";

const RegisterComponent = () => {
	const navigator = useNavigate();

	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleRegistrationForm(e) {
		e.preventDefault();

		const register = { name, username, email, password };

		console.log(register);

		registerAPICall(register)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<div className="flex justify-center">
			<form method="dialog" className="border border-base-content p-12 ">
				<h3 className="font-bold text-lg mb-4 justify-center flex">
					Registration
				</h3>
				<div className="form-control w-full max-w-xs">
					<label className="label">
						<span className="label-text">Name:</span>
					</label>
					<input
						type="text"
						placeholder="Type here"
						name="name"
						className="input input-bordered w-full max-w-xs input-sm"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="form-control w-full max-w-xs">
					<label className="label">
						<span className="label-text">Username:</span>
					</label>
					<input
						type="text"
						placeholder="Type here"
						name="username"
						className="input input-bordered w-full max-w-xs input-sm"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className="form-control w-full max-w-xs">
					<label className="label">
						<span className="label-text">Email:</span>
					</label>
					<input
						type="email"
						placeholder="Type here"
						name="email"
						className="input input-bordered w-full max-w-xs input-sm"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="form-control w-full max-w-xs">
					<label className="label">
						<span className="label-text">Password:</span>
					</label>
					<input
						type="password"
						placeholder="Type here"
						name="password"
						className="input input-bordered w-full max-w-xs input-sm"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className="modal-action">
					<button
						className="btn btn-accent btn-sm"
						onClick={(e) => handleRegistrationForm(e)}>
						Register
					</button>
				</div>
				<div className="flex justify-end mt-2 text-xs">
					<h1>Already Registered? </h1>
					<strong
						className="ml-2 cursor-pointer"
						onClick={() => {
							navigator("/login	");
						}}>
						Sign in
					</strong>
				</div>
			</form>
		</div>
	);
};

export default RegisterComponent;
