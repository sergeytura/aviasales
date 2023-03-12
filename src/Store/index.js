
// import React from "react";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
// import { useDispatch } from "react-redux";
// import { ThunkDispatch } from 'redux-thunk'
import { ticketsReducer } from './Reducers/ticketsReducer';


const rootReducer = combineReducers({
    tickets: ticketsReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export default store;