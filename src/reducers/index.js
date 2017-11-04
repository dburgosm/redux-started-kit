import { combineReducers } from 'redux';
import ExampleReducer from './ExampleReducer';

const rootReducer = combineReducers({
    reducer: ExampleReducer
});

export default rootReducer;