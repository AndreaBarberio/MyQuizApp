import React from 'react';

export default function Home({ username, onChange, value, onSubmit }: any) {
	return (
		<div className="container mx-auto mt-10">
			<label htmlFor="username" className="block text-lg font-semibold mb-2">
				Ciao{username ? `, ${username}` : ', inserisci il tuo nome'}
			</label>
			<input
				type="text"
				id="username"
				onChange={() => console.log('fare onchange')}
				value={username}
				className="border border-gray-300 text-black rounded-md px-3 py-2"
			/>
			<button
				onClick={() => console.log('fare onsubmit')}
				className="mt-4 bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
			>
				Invia
			</button>
		</div>
	);
}
