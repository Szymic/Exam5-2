import React from "react";
import ReactDOM from "react-dom";

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  handleClick = () => {
    this.setState({
      list: [...this.state.list, { nick }, { wiadomość }],
    });
  };

  render() {
    return (
      <div>
        <ul>
          <li></li>
          <li></li>
        </ul>
        <form>
          <input type="text" placeholder="nick"></input>
          <select>
            <option value="czarny" selected="selected">
              Czarny
            </option>
            <option value="niebieski">Niebieski</option>
            <option value="zielony">Zielony</option>
          </select>
          <textarea placeholder="wiadomość" className="form-control"></textarea>
          <button type="submit" onClick={this.handleClick}>
            Wyślij
          </button>
        </form>
      </div>
    );
  }
}

function App() {
  return <Chat />;
}

ReactDOM.render(<App />, document.getElementById("app"));
export { App, Chat };
