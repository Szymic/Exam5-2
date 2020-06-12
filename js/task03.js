import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        number: this.state.number + 1,
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));
export { Counter };
