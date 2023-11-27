import { configureStore } from '@reduxjs/toolkit';

// import { userReducer, quizReducer } from './reducers'; // Aggiungi il percorso corretto

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
	reducer: {
		// user: userReducer,
		// quiz: quizReducer,
		// Aggiungi altri reducer se presenti
	},
});

export default store;
