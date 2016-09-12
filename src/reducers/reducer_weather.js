import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			// return state.concat([action.payload.data]);
			//the below ES6 syntax makes a new array, puts action.payload.data inside of it
			//and take the second variable which is an array and concatenate it with outer array.
			return [action.payload.data, ...state];
	}
	return state;
}