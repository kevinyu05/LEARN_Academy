import React, { Component } from 'react';
import Square from './Square.js';


class Board extends Component {
constructor(props){
  super(props)
  this.state = {
    square: [
        '?', '?', '?', '?', '?', '?', '?', '?', '?','?', '?', '?', '?', '?', '?', '?', '?', '?','?', '?', '?', '?', '?', '?', '?'
      ],
    treasure: Math.floor((Math.random() * 25)),
    treasureTwo: Math.floor((Math.random() * 25)),
    bomb: Math.floor((Math.random() * 25)),
    bombTwo: Math.floor((Math.random() * 25)),

    }
  }


  treasureBoard (e) {
    let { square, treasure, bomb } = this.state
    // alert (square[e.target.id])
    let id = parseInt(e.target.id)
    if(square[e.target.id] === '?'){
        square[e.target.id] = 'TREE'
    }
    if(id === this.state.treasure || id === this.state.treasureTwo){
      square[e.target.id] = 'TREASURE'
      alert('YOU WIN!')
    }
    if(id === this.state.bomb || id === this.state.bombTwo){
      square[e.target.id] = 'BOMB'
      alert('LOSER!')
    }
    let newSquare = square === '?' ? 'tree': '?'

    // console.log(this.state)



    this.setState({square: square, treasure: treasure})
  }

  componentDidMount() {
    let { square, treasure, bomb, treasureTwo, bombTwo } = this.state

    console.log(treasure,treasureTwo, bomb, bombTwo);

        if(treasure === bomb || treasureTwo === bombTwo ||treasure === bombTwo || treasureTwo === bomb){
          treasure = Math.floor((Math.random() * 25))
        }
    this.setState({treasure: treasure})
    console.log(treasure, treasureTwo, bomb, bombTwo)

  }



  render() {
    console.log(this.state);
    let newSquare = this.state.square
    return (
      <div class="grid-container">
          <div onClick={this.treasureBoard.bind(this)} id = '0' class="grid-item">{this.state.square[0]}</div>
          <div onClick={this.treasureBoard.bind(this)} id = '1' class="grid-item">{this.state.square[1]}</div>
          <div onClick={this.treasureBoard.bind(this)} id = '2' class="grid-item">{this.state.square[2]}</div>
          <div onClick={this.treasureBoard.bind(this)} id = '3' class="grid-item">{this.state.square[3]}</div>
          <div onClick={this.treasureBoard.bind(this)} id = '4' class="grid-item">{this.state.square[4]}</div>
          <div onClick={this.treasureBoard.bind(this)} id = '5' class="grid-item">{this.state.square[5]}</div>
          <div onClick={this.treasureBoard.bind(this)} id = '6' class="grid-item">{this.state.square[6]}</div>
          <div onClick={this.treasureBoard.bind(this)} id = '7' class="grid-item">{this.state.square[7]}</div>
          <div onClick={this.treasureBoard.bind(this)} id = '8' class="grid-item">{this.state.square[8]}</div>
          <div onClick={this.treasureBoard.bind(this)} id = '9' class="grid-item">{this.state.square[9]}</div>
          <div onClick={this.treasureBoard.bind(this)} id = '10' class="grid-item">{this.state.square[10]}</div>
          <div onClick={this.treasureBoard.bind(this)} id = '11' class="grid-item">{this.state.square[11]}</div>
          <div onClick={this.treasureBoard.bind(this)} id = '12' class="grid-item">{this.state.square[12]}</div>
          <div onClick={this.treasureBoard.bind(this)} id = '13' class="grid-item">{this.state.square[13]}</div>
          <div onClick={this.treasureBoard.bind(this)} id = '14' class="grid-item">{this.state.square[14]}</div>
          <div onClick={this.treasureBoard.bind(this)} id = '15' class="grid-item">{this.state.square[15]}</div>
          <div onClick={this.treasureBoard.bind(this)} id = '16' class="grid-item">{this.state.square[16]}</div>
          <div onClick={this.treasureBoard.bind(this)} id = '17' class="grid-item">{this.state.square[17]}</div>
          <div onClick={this.treasureBoard.bind(this)} id = '18' class="grid-item">{this.state.square[18]}</div>
          <div onClick={this.treasureBoard.bind(this)} id = '19' class="grid-item">{this.state.square[19]}</div>
          <div onClick={this.treasureBoard.bind(this)} id = '20' class="grid-item">{this.state.square[20]}</div>
          <div onClick={this.treasureBoard.bind(this)} id = '21' class="grid-item">{this.state.square[21]}</div>
          <div onClick={this.treasureBoard.bind(this)} id = '22' class="grid-item">{this.state.square[22]}</div>
          <div onClick={this.treasureBoard.bind(this)} id = '23' class="grid-item">{this.state.square[23]}</div>
          <div onClick={this.treasureBoard.bind(this)} id = '24' class="grid-item">{this.state.square[24]}</div>
      </div>
    );
  }
}


export default Board;
