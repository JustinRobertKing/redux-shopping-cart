import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Shelf from './pages/Shelf'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <header className="App-header">
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shelf">Shelf</Link>
                  </li>
                  <li>
                    <Link to="/cart">Cart</Link>
                  </li>
                  <li>
                    <Link to="/wishlist">Wishlist</Link>
                  </li>
                </ul>
              </nav>
            </header>
            <div className="content">
              <Route exact path="/" component={Home} />
              <Route path="/shelf" component={Shelf} />
              <Route path="/cart" component={Cart} />
              <Route path="/wishlist" component={Wishlist} />
            </div>
          </div>
        </Router>
      </div>
    )
  }

}

export default App
