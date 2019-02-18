import React, { Component } from 'react';

class Buttons extends Component {
  render(){
    return (
      <div class="button" id="Buts">
        <button onClick={this.props.callAddLightsFunction}>Add Light</button>{' '}
        <button onClick={this.props.callRemoveLightsFunction}>Remove Light</button>{' '}
      </div>
    )
  }
}
export default Buttons
