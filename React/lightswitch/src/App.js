import React, { Component } from 'react';
import Light from './light.js'
import Switch from './switch.js'
import Buttons from './buttons.js'
import Header from './header.js'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      lightArray :[<Light />]
    }
  }

  addLight(){
    let {lightArray} = this.state

    lightArray.push(<Light/>)
    this.setState({lightArray: lightArray})
  }

  removeLight(){
    let {lightArray} = this.state
    if (lightArray.length > 1){
    lightArray.pop()}
    this.setState({lightArray: lightArray})
  }

  render() {
    return (
      <div>
        <div>
          <Header/>
          <Buttons callAddLightsFunction={this.addLight.bind(this)} callRemoveLightsFunction={this.removeLight.bind(this)}/>
        </div>
        <div id="box">
        {this.state.lightArray}
        </div>
      </div>
    );
  }
}

export default App;
