import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';

function UserList() {
	const [users, setUsers] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then((res) => setUsers(res.data))
			.catch((err) => setError(true));
	}, []);

	return (
		<>
			{users.map((user) => (
				<UserCard user={user} />
			))}
		</>
	);
}

export default UserList;
