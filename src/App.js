import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header";
import Form from "./components/form";
import "./App.css";

export default function App() {
  return (
    <div>
      <Header/>
      <Form />
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById("root"));
