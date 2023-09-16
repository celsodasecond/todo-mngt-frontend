import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAPICall } from "../services/AuthService";

const LoginComponent = () => {
	const navigator = useNavigate();

	const [usernameOrEmail, setUsernameOrEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleLoginForm(e) {
		e.preventDefault();

		const loginObj = { usernameOrEmail, password };

		console.log(loginObj);

		loginAPICall(usernameOrEmail, password)
			.then((response) => {
				console.log(response);
                navigator("/todos")
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<div className="flex justify-center">
			<form method="dialog" className="border border-base-content p-12 ">
				<h3 className="font-bold text-lg mb-4 justify-center flex">Login</h3>
				<div className="form-control w-full max-w-xs">
					<label className="label">
						<span className="label-text">Username:</span>
					</label>
					<input
						type="text"
						placeholder="Type here"
						name="username"
						className="input input-bordered w-full max-w-xs input-sm"
						value={usernameOrEmail}
						onChange={(e) => setUsernameOrEmail(e.target.value)}
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
						onClick={(e) => handleLoginForm(e)}>
						Login
					</button>
				</div>
				<div className="flex justify-end mt-2 text-xs">
					<h1>Still does not have an account? </h1>
					<strong
						className="ml-2 cursor-pointer"
						onClick={() => {
							navigator("/register");
						}}>
						Register here
					</strong>
				</div>
			</form>
		</div>
	);
};

export default LoginComponent;
