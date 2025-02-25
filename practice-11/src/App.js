import logo from "./logo.svg";
import "./App.css";
import ChildA from "./ChildA";
import UseReducerComponent from "./component/usereducerHooks";

function App() {
  let name = "Ankit Maurya";
  return (
    <>
      <ChildA name={name} />
      <UseReducerComponent />
    </>
  );
}

export default App;
