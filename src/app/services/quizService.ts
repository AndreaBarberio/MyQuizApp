import axiosInstance from './api';

export const fetchQuizQuestions = async (): Promise<QuizQuestion[]> => {
	try {
		const response = await axiosInstance.get('games');
		return response.data.results;
	} catch (error) {
		console.error('Errore durante la richiesta delle domande del quiz:', error);
		throw error;
	}
};

interface QuizQuestion {
	// Poi definire la struttura delle domande del quiz in base all API
  // esempio...
	id: number;
	question: string;
}
