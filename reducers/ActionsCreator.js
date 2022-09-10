const triggerSideMenuType = "TRIGGER_SIDE_MENU"
const setDarkModeType = "SET_DARK_MODE_TYPE"
const setLanguageType = "SET_LANGUAGE"




export const triggerSideMenu = () => ({
  type: triggerSideMenuType
})
export const setDarkMode = () => ({
  type: setDarkModeType
})
export const setLanguage = payload => ({
  type: setLanguageType,
  payload
})
