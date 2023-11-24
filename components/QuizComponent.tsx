// components/QuizComponent.tsx
import React from 'react';
import { connect } from 'react-redux';
import { setUserName } from '../redux/actions/userActions';
import { addScore } from '../redux/actions/quizActions';
import { RootState } from '../redux/store';

interface QuizComponentProps {
	name: string | null;
	scores: number[];
	setUserName: (name: string) => void;
	addScore: (score: number) => void;
}

class QuizComponent extends React.Component<QuizComponentProps> {
	// Implementa il tuo componente
}

const mapStateToProps = (state: RootState) => ({
	name: state.user.name,
	scores: state.quiz.scores,
});

const mapDispatchToProps = {
	setUserName,
	addScore,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizComponent);
