import React, { Component } from 'react';

class errors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'msg-lamNEO'
    };
  }

  handleClick = () => {
    this.setState({
      msg: 'Welcome to React'
    });
  };

  componentWillMount() {
    console.log('Component Will MOUNT!');
  }

  componentDidMount() {
    console.log('Component Did MOUNT!');
  }

  componentWillReceiveProps(newProps) {
    console.log('Component Will Recieve Props!');
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Component Will UPDATE!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component Did UPDATE!');
  }

  componentWillUnmount() {
    console.log('Component Will UNMOUNT!');
  }

  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default errors;
