import './App.css';
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  state = {
    num: 1
  }

  handleClick() {
    console.log('old num:', this.state.num);

    this.setState({
      num: this.state.num + 1
    }, function () {
      console.log('realTime num:', this.state.num);
    })

    console.log('new num:', this.state.num);

    const self = this;
    setTimeout(function() {
      console.log('before setTimeout num:', self.state.num);
      
      self.setState({ num: self.state.num + 1 });

      console.log('after setTimeout num:', self.state.num);
    })
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <p onClick={this.handleClick}>{this.state.num}</p>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
    );
  }
}

export default App;
