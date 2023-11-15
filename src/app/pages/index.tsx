// src/app/pages/index.tsx
import React from 'react';
import UserForm from '../components/UserForm';

const HomePage: React.FC = () => {
	return (
		<div className="flex flex-col items-center justify-center text-white">
			<h1 className="text-4xl font-bold mb-8">Benvenuto al Quiz!</h1>
			<UserForm />
		</div>
	);
};

export default HomePage;
