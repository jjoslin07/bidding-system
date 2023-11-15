import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = ({ header, socket }) => {
	const location = useLocation();
	const [notification, setNotification] = useState('');

	useEffect(() => {
		socket.on('addProductResponse', (data) => {
			setNotification(
				`@${data.owner} just added ${data.name} worth $${Number(
					data.price
				).toLocaleString()}`
			);
		});
	}, [socket]);

	useEffect(() => {
		socket.on('bidProductResponse', (data) => {
			setNotification(
				`@${data.last_bidder} just bid ${data.name} for $${Number(
					data.amount
				).toLocaleString()}`
			);
		});
	}, [socket]);
	const isProductPage = location.pathname === '/products'; // Adjust the path as needed

	return (
		<nav className="navbar">
			<div className="header">
				<h2>{header}</h2>
			</div>
			{isProductPage && (
				<div>
					<Link to="/" className="sign-out-link">
						Sign Out
					</Link>
				</div>
			)}
			<div>
				<p style={{ color: 'red' }}>{notification}</p>
			</div>
		</nav>
	);
};

export default Nav;
