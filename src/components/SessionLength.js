import React, { Component } from 'react';

class SessionLength extends Component {
  state = {
    count: 25
  }

  render () {
    return (
      <div>
        <h2>Session Length</h2>
        <h3>{this.state.count}</h3>
      </div>
    );
  }
}

export default SessionLength;