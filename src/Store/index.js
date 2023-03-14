
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import { ticketsReducer } from './Reducers/ticketsReducer';
import { sortReducer } from './Reducers/sortReducer';
import { filterReducer } from './Reducers/filterReducer';

const rootReducer = combineReducers({
    ticketsReducer,
    sortReducer,
    filterReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export default store;