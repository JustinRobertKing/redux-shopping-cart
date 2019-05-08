import { combineReducers } from 'redux'
import cart from './CartReducer';
import shelf from './ShelfReducer';

export default combineReducers({
	cart,
	shelf // Short for shelf: shelf
})