import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as WishlistActions from '../actions/WishlistActions'

class Wishlist extends Component {
	render() {
		let wishlistItems = Object.keys(this.props.wishlist).map((item, index) => {
			return (
				<li key={index}>
					{item} ({this.props.wishlist[item]})
				</li>
			)
		})
		return (
			<div>
				<h1>🖤 My Wishlist</h1>
				<ul>
					{wishlistItems}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		wishlist: state.wishlist
	}
}

export default connect(mapStateToProps, WishlistActions)(Wishlist)