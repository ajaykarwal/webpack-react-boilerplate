import React, { Component } from 'react';
import SayHello from './components/Hello';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>
          <SayHello title="Hello from Webpack with React" />
        </h1>
        <p>
          Start by editing <code>./src/App.js</code> and apply your styling in <code>./assets/sass/</code>
        </p>
      </div>
    );
  }
}

export default App;