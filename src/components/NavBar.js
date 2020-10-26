import React from 'react';
import { Link } from 'react-router-dom';
 
const navbar = () => {
  return (
    <nav>
      <div className="nav-style">
        <div className="nav-logo"><Link to='/'><p> React & Recipes </p></Link></div>
        <div><Link to='/'>Home</Link></div>
        <div><Link to='/search'>Search Meals and Ingredients</Link></div>
      </div>
    </nav>
  )
}
 
export default navbar;