import logo from "./logo.svg";
import "./App.css";
import ChildA from "./ChildA";

function App() {
  let name = "Ankit Maurya";
  return <ChildA name={name} />;
}

export default App;
