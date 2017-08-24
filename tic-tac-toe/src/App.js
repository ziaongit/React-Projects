import React, {Component} from 'react';

class  App extends Component {

    constructor() {
        super();
        this.state = {
            turn: 'X',
            gameEnded: false,
            winner: undefined,
        };
        this.gameState = {
            board: Array(9).fill(''),
            totalMoves: 0,
        }
    }

    clicked(event) {
        if(this.gameState.board[event.target.dataset.square]===''){
            this.gameState.board[event.target.dataset.square] = this.state.turn;
            event.target.innerText = this.state.turn;
            this.setState({
                turn: this.state.turn === 'X' ? 'O' : 'X',
                totalMoves: this.gameState.totalMoves++
            })
        }
        var result = this.checkWinner();
        if(result === 'X') {
            this.setState({
                gameEnded: true,
                winner: 'X',
                messageAlert: 'Match won by X'
            });
        }else if(result === 'O'){
            this.setState({
                gameEnded: true,
                winner: 'O',
                messageAlert: 'Match won by O'
            });
        }else if(result === 'draw') {
            this.setState({
                gameEnded:true,
                winner: 'draw',
                messageAlert: 'Match is drawn'
            })
        }
        
    }
    
    checkWinner() {
        let moves = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6], [0, 1, 2], [3, 4, 5], [6, 7, 8]];
        var board = this.gameState.board;
        for(let i=0; i<moves.length;i++){
            if(board[moves[i][0]]=== board[moves[i][1]] && board[moves[i][1]] === board[moves[i][2]]){
                return board[moves[i][0]]
            }
        }
        if(this.gameState.totalMoves == 9){
            return 'draw';
        }
    }

    render() {
        return (
        <section className="intro">
            <div className="inner">
                <div className="bord-container">
                    <div id="board">
                        <div id="head">
                            <h1>Tic Tac Toe Game</h1>
                        </div>
                        <div className="square" onClick={(e)=>this.clicked(e)} data-square="0"></div>
                        <div className="square" onClick={(e)=>this.clicked(e)} data-square="1"></div>
                        <div className="square" onClick={(e)=>this.clicked(e)} data-square="2"></div>
                        <div className="square" onClick={(e)=>this.clicked(e)} data-square="3"></div>
                        <div className="square" onClick={(e)=>this.clicked(e)} data-square="4"></div>
                        <div className="square" onClick={(e)=>this.clicked(e)} data-square="5"></div>
                        <div className="square" onClick={(e)=>this.clicked(e)} data-square="6"></div>
                        <div className="square" onClick={(e)=>this.clicked(e)} data-square="7"></div>
                        <div className="square" onClick={(e)=>this.clicked(e)} data-square="8"></div>
                    </div>
                    <div className="messageAlert"><h3>{this.state.messageAlert}</h3></div>
                </div>
            </div>
        </section>
        );
    }
}

export default App;