
import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTime: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ currentTime: new Date() });
  }

  render() {
    return (
      <div style={{ textAlign: 'center', padding: '10px' }}>
        <h2>Current Time</h2>
        <h3>{this.state.currentTime.toLocaleTimeString()}</h3>
      </div>
    );
  }
}

class Clocker extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ backgroundColor: 'black', color: 'white', padding: '50px' ,marginTop:'0px',textAlign:'center'}}>
          Welcome to the Clock App
        </h1>
        <Clock />
      </div>
    );
  }
}

export default Clocker;
