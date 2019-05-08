export default (state = {}, action) => {
	switch (action.type) {
		case 'ADD_CART_ITEM':
			let newState = {...state}
			if (newState[action.item]) { // If I have one in the cart already
				newState[action.item] += 1
			} else {
				newState[action.item] = 1
			}
			return newState
		case 'CLEAR_CART':
			return {}
		default: 
			return state
	}
}