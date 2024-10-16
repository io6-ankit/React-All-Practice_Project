import logo from "./logo.svg";
import "./App.css";

function App() {
  const biodata = [
    {
      id: 0,
      myName: "Ankit ",
      age: 19,
    },
    {
      id: 1,
      myName: "Maurya",
      age: 22,
    },
    {
      id: 2,
      myName: "vinay",
      age: 30,
    },
  ];
  return (
    <>
      {" "}
      {biodata.map((curElm) => {
        return (
          <h1>
            Name:{curElm.myName} & Age :{curElm.age} & id:{curElm.id}
          </h1>
        );
      })}
    </>
  );
}

export default App;
