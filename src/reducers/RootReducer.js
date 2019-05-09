import { combineReducers } from 'redux'
import cart from './CartReducer';
import shelf from './ShelfReducer';
import wishes from './WishlistReducer'

export default combineReducers({
	cart,
	shelf,
	wishes
})