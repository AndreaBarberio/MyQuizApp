import axios, { AxiosInstance } from 'axios';

const apiKey = 'aab36292144843b9af1e26a5dcfa6516'; // Chiave fornita dal servizio gratuito RAWG

const instance: AxiosInstance = axios.create({
	baseURL: 'https://api.rawg.io/api/',
	headers: {
		'Content-Type': 'application/json',
		key: apiKey,
	},
});

export default instance;
