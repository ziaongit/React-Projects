import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

//Components
import Menu from './components/menu';
import About from './components/about';
import Profile from './components/profile';
import Contact from './components/contact';
import Footer from './components/footer';
import NotFount from './components/not_found';

class App extends Component {
    render(){
        return(
            <div className="tm-right-column">
                <div className="tm-content-div">
                    <section id="welcome" className="tm-section">
                        <header>
                            <h2 className="tm-blue-text tm-welcome-title tm-margin-b-45">Welcome to Neaty Design</h2>
                        </header>
                        <p>Neaty is simple and clean design HTML CSS template for any kind of website. Vivamus eget tellus euismod, interdum nibh at, eleifend justo. Quisque placerat ante in ex tempor, ultrices bibendum nunc finibus. Etiam luctus nec eros vel pulvinar.</p>
                        <p>Etiam luctus nec eros vel pulvinar. Quisque placerat ante in ex tempor, ultrices bibendum nunc finibus. Etiam luctus nec eros vel pulvinar. Vivamus eget tellus euismod, interdum nibh at, eleifend justo. Quisque placerat ante in ex tempor, ultrices bibendum nunc finibus.</p>
                    </section>
                </div>
            </div>)
    }
}


ReactDOM.render(
    <BrowserRouter>
        <div>
            <Menu />
            <Route exact path="/" component={App}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="*" component={NotFount}></Route>
            <Footer />
        </div>
    </BrowserRouter>
    , document.querySelector('#root'));
