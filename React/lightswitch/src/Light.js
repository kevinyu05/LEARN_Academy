import React, { Component } from 'react';
import Switch from './switch.js'

class Light extends Component {
  constructor(props){
    super(props)
    this.state = {
      configIndex: 0
    }
  }

toggleLights(){
  let { configIndex } = this.state
  if( configIndex === 0){
    configIndex = 1
  } else if(configIndex === 1){
    configIndex = 2
  } else if(configIndex === 2){
    configIndex = 1
  }
  this.setState({configIndex: configIndex})
}

  render() {
    var config = [{alert:null, image:require('./imgs/off.png')},
              {alert:'On', image:require('./imgs/on.png')},
              {alert:'Off', image:require('./imgs/off.png')}]

    let {configIndex} = this.state
    let lightbulbCss = {
      width: '200px',
      height: '200px',
      textAlign: 'center',
      userSelect: 'none',
      backgroundImage: `url(${config[configIndex].image})`,
      backgroundRepeat:'no-repeat',
      backgroundSize: '200px 200px',
      margin: 'auto',
      marginTop: '20px',
      }

   return (
    <div id="all">
      <div style={lightbulbCss} id="bulb"></div>
      <div id="switchAndHeader">
        <Switch callToggleLightsFunction={this.toggleLights.bind(this)}/>
      </div>
    </div>
    )
  }
}

export default Light;
