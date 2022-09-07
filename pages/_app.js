import '../styles/globals.css'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import MainReducer from '../reducers/MainReducer'

const rootReducer = combineReducers({
	MainReducer
})

const store = createStore(rootReducer)

function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
}

export default MyApp
