interface UserState {
	name: string | null;
}

const initialState: UserState = {
	name: null,
};

const userReducer = (state = initialState, action: any): UserState => {
	switch (action.type) {
		case 'SET_USER_NAME':
			return {
				...state,
				name: action.payload,
			};
		default:
			return state;
	}
}; 

export default userReducer;
