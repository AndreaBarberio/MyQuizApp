// redux/store/index.ts
import { createStore, combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';
import quizReducer from '../reducers/quizReducer';

const rootReducer = combineReducers({
	user: userReducer,
	quiz: quizReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
