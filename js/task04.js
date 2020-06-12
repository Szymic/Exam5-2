import React from "react";
import ReactDOM from "react-dom";

function CompanyData(props) {
  if (
    props.name.length > 0 &&
    props.address.length > 0 &&
    props.nip.length === 10 &&
    props.regon.length === 9
  ) {
    return (
      <div className="card">
        <div>
          <h1>{props.name}</h1>
          <p>
            NIP: {props.nip}, REGON: {props.regon}
          </p>
          <p>{props.address}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

function App(props) {
  return (
    <CompanyData
      name="IBM"
      nip="1234567891"
      regon="123456789"
      address="Gliwice"
    />
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
export { App, CompanyData };
