// src/components/UserForm.tsx
import React, { useState } from 'react';
import Button from './Button';

const UserForm: React.FC = () => {
	const [name, setNameValue] = useState('');

	const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNameValue(event.target.value);
	};

	const handleFormSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		console.log('handleSubmit da fare');
	};

	return (
		<div className="flex flex-col items-center justify-center p-8 bg-slate-400 rounded-lg">
			<form onSubmit={handleFormSubmit} className="w-full max-w-md">
				<label className="block text-white text-lg mb-4">
					Inserisci il tuo nome:
					<input
						type="text"
						value={name}
						onChange={handleNameChange}
						className="w-full p-2 mt-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
					/>
				</label>
				<Button title="Inizia il tuo Quiz" link="/quiz" />
			</form>
		</div>
	);
};

export default UserForm;
