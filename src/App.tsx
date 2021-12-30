import React, { FC } from "react";
import "./App.css";
import Carousel from "./components/Carousel";

import greeting from "./images/greet.png";
import leaves from "./images/leaves.png";
import cornucop from "./images/cornucop.png";

const App: FC = () => {
  return (
    <div className="App">
      <div className="text-center">
        <img src={greeting} className="rounded" alt="..." />
        <Carousel />
      </div>
      <div>
        <img src={leaves} className="leaves" alt="..." />
        <img src={cornucop} className="cornucop" alt="..." />
      </div>
    </div>
  );
};

export default App;
