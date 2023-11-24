interface QuizState {
	scores: number[];
}

const initialQuizState: QuizState = {
	scores: [],
};

const quizReducer = (state = initialQuizState, action: any): QuizState => {
	switch (action.type) {
		case 'ADD_SCORE':
			return {
				...state,
				scores: [...state.scores, action.payload],
			};
		default:
			return state;
	}
};

export default quizReducer;
