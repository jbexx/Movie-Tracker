const loginReducer = (state = [], action) => {
	switch (action.type) {
		case 'GET_USER':
			return [...state, { user: action.user, password: action.password }]
		default:
			return state
	}
}

export default loginReducer