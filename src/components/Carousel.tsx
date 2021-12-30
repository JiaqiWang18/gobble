import React, { FC, useEffect, useState } from "react";

import clickme from "../images/clickme.gif";
import t1 from "../images/t1.gif";
import t2 from "../images/t2.gif";
import t3 from "../images/t3.gif";
import t4 from "../images/t4.gif";
import t5 from "../images/t5.gif";
import t6 from "../images/t6.gif";
import t7 from "../images/t7.gif";
import t8 from "../images/t8.gif";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { increment } from "../state/slice/carouselSlice";

const Carousel: FC = () => {
  const images: string[] = [t1, t2, t3, t4, t5, t6, t7, t8];

  const imgIndex = useAppSelector((state) => state.carousel.currentImageIndex);
  const dispatch = useAppDispatch();

  const [curImg, setCurImg] = useState(clickme);

  useEffect(() => {
    if (imgIndex !== -1) setCurImg(images[imgIndex]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgIndex]);

  return (
    <div onClick={() => dispatch(increment())}>
      <img src={curImg} alt="..." />
      {imgIndex === -1 && <h2 className="yellow-text">CLICK ME!!!</h2>}
    </div>
  );
};

export default Carousel;
