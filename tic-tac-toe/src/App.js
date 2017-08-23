import React, {Component} from 'react';
import './App.css';

class  App extends Component {
    
    render() {
        return (
                <header id="showcase">
                    <h1>Tic Tac Toe Game</h1>
                    <div class="game-container">
                        <div class="inner-container">
                            <section class="section">
                                <div class="box"></div>
                                <div class="box"></div>
                                <div class="box"></div>
                            </section>
                            <section class="section">
                                <div class="box"></div>
                                <div class="box"></div>
                                <div class="box"></div>
                            </section>
                            <section class="section">
                                <div class="box"></div>
                                <div class="box"></div>
                                <div class="box"></div>
                            </section>
                        </div>
                    </div>
                    <div class="winner"></div>
                    <div class="button">
                        <button id="restart">Restart</button>
                    </div>
                </header>
        );
    }
}

export default App;