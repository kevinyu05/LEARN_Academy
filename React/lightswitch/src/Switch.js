import React, { Component } from 'react';

class Switch extends Component {

render() {
  let switchCss = {
    width: '50px',
    height: '50px',
    textAlign: 'center',
    userSelect: 'none',
    backgroundImage: `url(${require('./imgs/switch.png')})`,
    backgroundRepeat:'no-repeat',
    backgroundSize: '50px 50px',
    margin: 'auto',
    marginTop: '20px',
    }

return (
  <div id="switch" style={switchCss} onClick={this.props.callToggleLightsFunction}>
  </div>
    )
  }
}

export default Switch;
