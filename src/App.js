import React, { Component } from "react"; // Import React and Component from react
import "./App.css"; // Import CSS for styling

// Class-based CounterApp component
class CounterApp extends Component {
  constructor(props) {
    super(props); // Call the constructor of the parent class
    this.state = {
      count: 0, // Initialize the count state to 0
    };
  }

  // Increment method to increase the count
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  // Decrement method to decrease the count
  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  // Render method to define the UI
  render() {
    return (
      <div>
        <h1>Counter App</h1> {/* Title of the app */}
        <p>Count: {this.state.count}</p> {/* Display the current count */}
        <button onClick={this.increment}>Increment</button>{" "}
        {/* Increment button */}
        <button onClick={this.decrement}>Decrement</button>{" "}
        {/* Decrement button */}
      </div>
    );
  }
}

// The App component that uses CounterApp
class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterApp /> {/* Rendering CounterApp */}
      </div>
    );
  }
}

export default App;
