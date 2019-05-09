import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as WishlistActions from '../actions/WishlistActions'

class Wishlist extends Component {
	render() {
		let wishlistItems = Object.keys(this.props.wishlist).map((item, index) => {
			return (
				<li key={index}>
				<button onClick={() => {this.props.removeWish(item)}}>💔</button>{' '}
					{item} ({this.props.wishlist[item]})
				</li>
			)
		})
		return (
			<div>
				<h1><span role="img">🖤</span> My Wishlist <span role="img">🖤</span></h1>
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