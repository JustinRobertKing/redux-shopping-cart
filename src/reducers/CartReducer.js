export default (state = {}, action) => {
	let newState = {...state}
	switch (action.type) {
		case 'ADD_CART_ITEM':
			if (newState[action.item]) { // If I have one in the cart already
				newState[action.item] += 1
			} else {
				newState[action.item] = 1
			}
			return newState
		case 'CLEAR_CART':
			return {}
		case 'REMOVE_CART_ITEM':
			delete newState[action.item]
			return newState
		default: 
			return state
	}
}