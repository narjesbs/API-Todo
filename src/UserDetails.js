import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import Spin from './Spinner';
function UserDetails() {
	let { id } = useParams();
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((res) => {
				setUser(res.data);
				setLoading(false);
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<>
			{loading ? (
				<Spin />
			) : (
				<Card
					style={{
						background: '#fff',
						padding: '1.5rem 2rem',
						borderRadius: '0.25rem',
						boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
						textAlign: 'center',
					}}
				>
					<Card.Body
						style={{
							marginBottom: '0.5rem',
							textTransform: 'uppercase',
							color: 'hsl(205, 78%, 60%)',
							fontSize: '0.85rem',
						}}
					>
						<Card.Title>
							<h4>City:</h4>
							{user.address.city}
						</Card.Title>
						<Card.Title>
							<h4>Street:</h4>
							{user.address.street}
						</Card.Title>
						<Card.Title>
							<h4>Website:</h4>
							{user.website}
						</Card.Title>
						<Card.Title>
							<h4>Company:</h4>
							{user.company.name}
						</Card.Title>
						<Link to={'/'}>
							<Button className='home-btn'>
								<FaChevronLeft />
								Go Back
							</Button>
						</Link>
					</Card.Body>
				</Card>
			)}
		</>
	);
}
export default UserDetails;
