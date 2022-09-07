const initialState = {
	sideMenu: true
}


const MainReducer = (state=initialState, action) => {
	switch(action.type) {
		case "TRIGGER_SIDE_MENU":
			return {
				...state,
				sideMenu: !state.sideMenu
			}
		default:
			return state;
	}
}

export default MainReducer
