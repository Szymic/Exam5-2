import React from "react";
import ReactDOM from "react-dom";

class CarsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: "",
    };
  }

  handleOnChange = (e) => {
    if (this.state.a === BMW) {
      this.setState({
        a: (
          <ul>
            <li>X6 I E71</li>
            <li>M6 F13</li>
            <li>SERIA 7 G11</li>
          </ul>
        ),
      });
    }
  };

  render() {
    return (
      <div>
        <ul>
          <select onChange={this.handleOnChange}>
            <option value="" id="1">
              Wybierz
            </option>
            <option value={this.state.a} id="2" onChange={this.handleOnChange}>
              BMW
            </option>
            <option value="jaguar">Jaguar</option>
            <option value="porsche">Porsche</option>
          </select>
        </ul>
      </div>
    );
  }
}

function App() {
  return <CarsList />;
}

ReactDOM.render(<App />, document.getElementById("app"));

export { CarsList, App };
