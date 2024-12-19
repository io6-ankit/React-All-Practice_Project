import logo from "./logo.svg";
import "./App.css";
import Props from "./component/props";
import { useState } from "react";
import { Box } from "@mui/material";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <>
      <Box className="flex flex-col items-center justify-center">
        <h1>02-Todo Board</h1>
        <Props taskList={taskList} setTaskList={setTaskList} />
        <Box>
          {taskList.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default App;
