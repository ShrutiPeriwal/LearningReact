import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header";
import Form from "./components/form";
import "./App.css";

export default function App() {
 {/*} const [goingOut, setGoingOut] = useState("true");
  
  function changeMind() {
    setGoingOut(prevState => !prevState)
  } */}
  return (
    <div>
      <Header/>
      <Form />
     {/* 
     <div>
        <h1>Do I feel like going out?</h1>
        <div onClick = {changeMind}>
          <h1>{goingOut  ? 'YES' : 'NO'}</h1>
        </div>
      </div>  */} 
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById("root"));
