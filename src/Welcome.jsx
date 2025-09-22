import React, { Component } from 'react';

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount (runs first after initial render)");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate (runs after state/props change)");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount (cleanup before component is removed)");
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
                                                                    