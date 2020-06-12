import React from "react";
import ReactDOM from "react-dom";

class Lol extends React.Component {
  render() {
    return (
      <>
        <div>Egzamin</div>
        <button>Klik</button>
      </>
    );
  }
}

ReactDOM.render(<Lol />, document.getElementById("app"));
export { Lol };
