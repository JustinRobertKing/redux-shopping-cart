export const addWish = (item) => {
	return {
		type: 'ADD_WISH',
		item
	}
}

export const removeWish = (item) => {
	return {
		type: 'REMOVE_WISH',
		item
	}
}