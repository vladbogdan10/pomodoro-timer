import React, { Component } from 'react';

class SessionLength extends Component {
  state = {
    count: null
  }

  render () {
    const style = {
      display: 'inline-block'
    }

    return (
      <div style={style}>Session Length</div>
    );
  }
}

export default SessionLength;