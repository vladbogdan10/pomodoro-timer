import React, { Component } from 'react';

class BreakLength extends Component {
  state = {
    count: null
  }

  render () {
    const style = {
      display: 'inline-block'
    }

    return (
      <div style={style}>Break Length</div>
    );
  }
}

export default BreakLength;