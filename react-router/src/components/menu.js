import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Menu extends Component {
    render(){
        return(
            <div className="tm-blue-bg tm-left-column">                        
                <div className="tm-logo-div text-xs-center">
                    <h1 className="tm-site-name">Welcome</h1>
                </div>
                <nav className="tm-main-nav">
                    <ul className="tm-main-nav-ul">
                        <li className="tm-nav-item">
                            <Link to="/" className="tm-nav-item-link">Home</Link>
                        </li>
                        <li className="tm-nav-item">
                            <Link to="/about" className="tm-nav-item-link">About</Link>
                        </li>
                        <li className="tm-nav-item">
                            <Link to="/profile" className="tm-nav-item-link">Profile</Link>
                        </li>
                        <li className="tm-nav-item">
                            <Link to="/contact" className="tm-nav-item-link">Contact</Link>
                        </li>
                    </ul>
                </nav>                                         
            </div>
        )
    }
}


export default Menu;