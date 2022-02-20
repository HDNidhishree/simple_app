import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
	const [users, setUsers] = useState([]);
	const handleUsersAdded = (user) => {
		setUsers((prevState) => {
			return [...prevState, { ...user, id: Math.random().toString() }];
		});
	};
	return (
		<div>
			<AddUser onUserAdded={handleUsersAdded} />
			<UsersList users={users} />
		</div>
	);
}

export default App;
