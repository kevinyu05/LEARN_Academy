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
      player_2: "X"
      dropdownOpen: false

    };
  }



  handleClick(i) {
  let { squares, player } = this.state

    if(squares[i] === null){
      squares[i] = player
    }
  let newPlayer = player === 'X' ? 'O' : 'X'

    this.setState({squares: squares, player: newPlayer})
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
  if(squares[a] && squares[a] == squares[b] && squares[a] == squares[c]){
alert("WEEENER")
this.reset()
  }
}

}
reset(){
  this.setState({
    squares: [null, null, null, null, null, null, null, null, null],
    player_1: "X",
    player_2: "O",
  })
}


  renderSquare(i) {
    return (
      <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />
    );
  }

  render() {
    return (



      <div class="grid-container">
          <div class="grid-item">{this.renderSquare(0)}</div>
          <div class="grid-item">{this.renderSquare(1)}</div>
          <div class="grid-item">{this.renderSquare(2)}</div>
          <div class="grid-item">{this.renderSquare(3)}</div>
          <div class="grid-item">{this.renderSquare(4)}</div>
          <div class="grid-item">{this.renderSquare(5)}</div>
          <div class="grid-item">{this.renderSquare(6)}</div>
          <div class="grid-item">{this.renderSquare(7)}</div>
          <div class="grid-item">{this.renderSquare(8)}</div>

      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>{this.state.player_1}</DropdownItem>
          <DropdownItem>Player 2 State</DropdownItem>
          <DropdownItem>Player 3 State</DropdownItem>
        </DropdownMenu>
      </Dropdown>
        </div>
    );
  }
}


export default Board;
