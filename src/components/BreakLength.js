import React, { Component } from 'react';
import '../index.css';

class BreakLength extends Component {
  state = {
    count: 5
  }

  render () {
    return (
      <div className="BreakLength">
        <h2>Break Length</h2>
        <h3>{this.state.count}</h3>
      </div>
    );
  }
}

export default BreakLength;