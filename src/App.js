import React from "react";
import { SimpleText } from "./components/SimpleText";

function App() {
  const x = { isDeveloper: true };
  const skills = [
    { id: 1, title: "Html" },
    { id: 2, title: "css" },
    { id: 3, title: "React" },
    { id: 4, title: "Vue" },
  ];
  return (
    <div className="App">
      <SimpleText name={"Alex"} age={300} someObj={x} stack={skills} />
    </div>
  );
}

export default App;
