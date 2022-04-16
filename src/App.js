import logo from "./logo.svg";
import "./App.css";
import Todo from "./Component/Todo";
import { useSelector, useDispatch } from "react-redux";

function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
