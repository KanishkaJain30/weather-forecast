import { combineReducers } from 'redux';
import WeatherReducer from '../containers/reducer.js';
const rootReducer = combineReducers({
  weather :WeatherReducer
});

export default rootReducer;