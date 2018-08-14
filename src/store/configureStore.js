import {createStore} from 'redux'
import reducer from '../reducers/timeReducer'
import {composeWithDevTools} from 'redux-devtools-extension'

export default createStore(reducer, composeWithDevTools());
