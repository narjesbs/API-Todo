import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function UserCard({ user }) {
	return (
		<>
			<Card
				style={{
					background: '#fff',
					padding: '1.5rem 2rem',
					borderRadius: '0.25rem',
					boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
					textAlign: 'center',
				}}
			>
				<Card.Body>
					<Card.Title style={{ marginBottom: '0.25rem' }}>
						{user.name}
					</Card.Title>
					<Card.Title>{user.email}</Card.Title>
					<Card.Title style={{ marginBottom: '0.75rem' }}>
						{user.phone}
					</Card.Title>
					<Link to={`/details/${user.id}`}>
						<Button className='more-btn'>Know more</Button>
					</Link>
				</Card.Body>
			</Card>
		</>
	);
}

export default UserCard;
