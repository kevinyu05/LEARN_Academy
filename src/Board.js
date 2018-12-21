import React, { Component } from 'react';
import Square from './Square.js';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],
      player_1: "X",
      player_2: "O",
      dropdownOpen: false,
      selectCount: 0

    };
  }

  changeToken(event){
    console.log(event.target.innerText);
    let playerSymbol = event.target.innerText
    let { player_1, player_2 } = this.state
    player_1

        //   player_1 = token1;
        //   player_2 = token2;
        // let player2 = player_2
        // let player1 = player_1
        //   this.setState({ player_1: player1, player_2: player2})
      }


  handleClick(e) {
    let { squares, player_1, player_2 } = this.state
    player_1 = e.target.id
    console.log(player_1);

    // if(squares[i] === null){
    //   squares[i] = player1
    // }
  let newPlayer = player_1 === player_1 ? player_2 : player_1

    this.setState({squares: squares, player_1: player_1, player_2: player_2})
    this.checkWinner()
}
toggle() {
  this.setState(prevState => ({
    dropdownOpen: !prevState.dropdownOpen
  }));
}
checkWinner(){
  let { squares } = this.state
  let winnerArr =
  [[0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]]

  for( let i = 0; i < winnerArr.length;i++){
  let [a,b,c] = winnerArr[i]


  if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){


alert("WEEENER")
this.reset()
  }
}

}
reset(){
  this.setState({
    squares: [null, null, null, null, null, null, null, null, null],
    player: 'X'
  })
}


  renderSquare(i) {
    return (
      <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />
    );
  }

  render() {
    return (



      <div className="grid-container">
          <div className="grid-item">{this.renderSquare(0)}</div>
          <div className="grid-item">{this.renderSquare(1)}</div>
          <div className="grid-item">{this.renderSquare(2)}</div>
          <div className="grid-item">{this.renderSquare(3)}</div>
          <div className="grid-item">{this.renderSquare(4)}</div>
          <div className="grid-item">{this.renderSquare(5)}</div>
          <div className="grid-item">{this.renderSquare(6)}</div>
          <div className="grid-item">{this.renderSquare(7)}</div>
          <div className="grid-item">{this.renderSquare(8)}</div>

      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={this.changeToken.bind(this)} id='x'>X</DropdownItem>
          <DropdownItem onClick={this.changeToken.bind(this)}>O</DropdownItem>
          <DropdownItem onClick={this.changeToken.bind(this)}>test</DropdownItem>
        </DropdownMenu>
      </Dropdown>
        </div>
    );
  }
  componentDidMount(){

  }
}


export default Board;
