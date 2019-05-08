import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as CartActions from '../actions/CartActions'

class Cart extends Component {
	render() {
		let cartItems = Object.keys(this.props.cart).map((item, i) => {
			return (
				<li key={i}>
					{item} ({this.props.cart[item]})
				</li>
			)
		})
		return (
			<div>
				<h1>Cart</h1>
				<ul>
					{cartItems}
				</ul>
				<button onClick={this.props.clearCart}>Clear All</button>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		cart: state.cart
	}
}

export default connect(mapStateToProps, {
	clearCart: CartActions.clearCart
})(Cart)