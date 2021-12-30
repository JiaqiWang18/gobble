import React, { FC } from "react";
import "./App.css";

import greeting from "./images/greet.png";

const App: FC = () => {
  return (
    <div className="App">
      <div className="text-center">
        <img src={greeting} className="rounded" alt="..." />
      </div>
    </div>
  );
};

export default App;
