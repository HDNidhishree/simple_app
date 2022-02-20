import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import "./AddUser.css";

const AddUser = (props) => {
	const [value, setValue] = useState({
		username: "",
		age: 1,
	});
	const [error, setError] = useState();

	const handleInput = (event) => {
		setValue((prevState) => {
			return { ...prevState, [event.target.name]: event.target.value };
		});
	};

	const handleAddUser = (event) => {
		event.preventDefault();
		if (value.username.trim().length === 0 || value.age < 1) {
			setError({
				title: "Invalid input",
				message: "Please enter a valid name and age",
			});
			return;
		}
		props.onUserAdded(value);
		setValue(() => {
			return {
				username: "",
				age: 1,
			};
		});
	};

	const handleError = () => {
		setError(null);
	};

	return (
		<div>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onHandleError={handleError}
				/>
			)}
			<Card className="input">
				<form onSubmit={handleAddUser}>
					<label htmlFor="username"> Username</label>
					<input
						type="text"
						id="username"
						name="username"
						onChange={handleInput}
						value={value.username}
					/>
					<label htmlFor="age">Age(Years)</label>
					<input
						type="number"
						id="age"
						name="age"
						min="1"
						max="100"
						onChange={handleInput}
						value={value.age}
					/>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;
