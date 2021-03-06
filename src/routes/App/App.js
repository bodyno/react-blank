import React from 'react'
import NavLink from '../../components/NavLink'
import Home from '../Home'

export default React.createClass({
  render() {
    return (
      <div className="container">
        <h1>React Router Tutorial</h1>
        <ul role='nav'>
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/repos'>Repos</NavLink></li>
        </ul>
        {this.props.children || <Home />}
      </div>
    )
  }
})
