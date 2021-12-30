import React, { FC } from "react";

import clickme from "../images/clickme.gif";

const Carousel: FC = () => {
  return (
    <div>
      <img src={clickme} className="img-fluid" alt="..." />
    </div>
  );
};

export default Carousel;
