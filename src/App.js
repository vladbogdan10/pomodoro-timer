import React, { Component } from 'react';
import BreakLength from './components/BreakLength';
import SessionLength from './components/SessionLength';
import './index.css';

class App extends Component {
  render() {

    const style = {
      textAlign: 'center'
    }

    return (
      <div>
        <h1 style={style}>Pomodoro Timer</h1>
        <div className="TimersContainer">
          <BreakLength />
          <SessionLength />
        </div>
      </div>
    );
  }
}

export default App;
