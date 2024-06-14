import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav(props) {
    return (
        <div className='navBar'>
              <ul>
                   <li><Link to="/">Home</Link></li>
                   <li><Link to="/Page1">Page1</Link></li>
                   <li><Link to="/Page2">Page2</Link></li>
              </ul>


        </div>
    );
}

export default Nav;