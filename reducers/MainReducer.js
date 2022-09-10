const initialState = {
	sideMenu: false,
	lang: "fr",
	darkMode: false
}


const MainReducer = (state=initialState, action) => {
	switch(action.type) {
		case "TRIGGER_SIDE_MENU":
			return {
				...state,
				sideMenu: !state.sideMenu
			}
		case "SET_DARK_MODE_TYPE":
			return {
				...state,
				darkMode: !state.darkMode
			}
		case "SET_LANGUAGE":
			return {
				...state,
				lang: action.payload
			}
		default:
			return state;
	}
}

export default MainReducer
