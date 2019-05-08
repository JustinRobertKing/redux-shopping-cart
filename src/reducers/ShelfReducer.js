const initialState = [
	'Drop',
	'DL4',
	'Ricochet',
	'Blooper',
	'OCD',
	'Particle',
	'Context',
	'NS-2',
	'Neku Stomp',
	'Bit Commander'
]

export default (state = initialState, action) => {
	switch (action.type) {
		case 'STOCK_ITEM':
			return [...state, action.item]
		default:
			return state
	}
}