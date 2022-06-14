import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todos } from './reducer';
import { loading } from './reducer';


const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

const reducers = { todos, loading}

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer, composedEnhancer);
