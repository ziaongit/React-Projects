import React, {Component} from 'react';

class  App extends Component {

    constructor() {
        super();
        this.state = {
            winner: undefined,
        };
        this.gameState = {
            turn: 'X',
            gameLocked:false,
            gameEnded: false,
            board: Array(9).fill(''),
            totalMoves: 0,
        }
    }

    clicked(box) {
        if(this.gameState.gameEnded || this.gameState.gameLocked) return;
        if(this.gameState.board[box.dataset.square]===''){
            this.gameState.board[box.dataset.square] = this.gameState.turn;
            box.innerText = this.gameState.turn;
            this.gameState.turn = this.gameState.turn === 'X' ? 'O' : 'X';
            this.gameState.totalMoves++;
        }
        var result = this.checkWinner();

        if(result == 'X') {
            this.gameState.gameEnded = true;
            this.setState({
              winner: 'X',
              messageAlert: 'Match won by X'
            });
        }else if(result == 'O') {
            this.gameState.gameEnded = true;
            this.setState({
              winner: 'O',
              messageAlert: 'Match won by O'
            });
        }else if(result === 'draw') {
            this.gameState.gameEnded = true;
            this.setState({
              winner: 'draw',
              messageAlert: 'Match is drawn'
            })
        }

        if(this.gameState.turn == 'O' && !this.gameState.gameEnded) {
            this.gameState.gameLocked = true;
            setTimeout(()=> {
              do {
                var random = Math.floor(Math.random()*9);
              } while(this.gameState.board[random] != '');
              this.gameState.gameLocked = false;
              this.clicked(document.querySelectorAll('.square')[random]);
            }, 500);
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
                        <div className="square" onClick={(e)=>this.clicked(e.target)} data-square="0"></div>
                        <div className="square" onClick={(e)=>this.clicked(e.target)} data-square="1"></div>
                        <div className="square" onClick={(e)=>this.clicked(e.target)} data-square="2"></div>
                        <div className="square" onClick={(e)=>this.clicked(e.target)} data-square="3"></div>
                        <div className="square" onClick={(e)=>this.clicked(e.target)} data-square="4"></div>
                        <div className="square" onClick={(e)=>this.clicked(e.target)} data-square="5"></div>
                        <div className="square" onClick={(e)=>this.clicked(e.target)} data-square="6"></div>
                        <div className="square" onClick={(e)=>this.clicked(e.target)} data-square="7"></div>
                        <div className="square" onClick={(e)=>this.clicked(e.target)} data-square="8"></div>
                    </div>
                    <div className="messageAlert"><h3>{this.state.messageAlert}</h3></div>
                </div>
            </div>
        </section>
        );
    }
}

export default App;